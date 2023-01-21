import urllib.request
from xml.dom import minidom
import re
import datetime

myRssFeedLink = '...&link=1&v=2'
myPathToSave = 'path/to/watch/start/'


def getHtml():
    with urllib.request.urlopen(myRssFeedLink) as f:
        html = f.read().decode('utf-8')
        return html


def getList(myStr):
    list = []
    i = 1
    dom = minidom.parseString(myStr)
    for tag in dom.getElementsByTagName('item'):
        list.append({
            'i': i,
            'title': tag.getElementsByTagName('title')[0].firstChild.nodeValue,
            'link': tag.getElementsByTagName('link')[0].firstChild.nodeValue,
            'size': int(tag.getElementsByTagName('size')[0].firstChild.nodeValue),
            'pubDate': tag.getElementsByTagName('pubDate')[0].firstChild.nodeValue,
            'description': re.sub('\s+', ' ', tag.getElementsByTagName('description')[0].firstChild.nodeValue.replace('\n', ''))
        })
        i += 1
    return list


def getLink(myList, i):
    for x in myList:
        if x['i'] == i:
            return x['link']
    return None


myStr = getHtml()
myList = getList(myStr)
for x in myList:
    print(x['i'], x['title'], '{0:.2f}'.format(
        x['size'] / (1000 * 1000)), x['pubDate'])
    print(x['description'])
    print()

indexes = input('Choose Indexes: ')
split = indexes.split()
dt = datetime.datetime.now()
for s in split:
    i = int(s)
    if i > 0 and i <= len(myList):
        urllib.request.urlretrieve(getLink(
            myList, i), myPathToSave + str(dt.microsecond) + '_' + str(i) + '.torrent')
