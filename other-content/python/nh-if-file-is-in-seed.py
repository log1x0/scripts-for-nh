# python3 is required in the following
# call: python3 nh-if-file-is-in-seed.py

import os
import re

myUid = '123'
myPass = '456'
myDownloadDir = '/home/benutzername/downloads/'

os.system("curl 'https://newheaven.nl/index.php?strWebValue=account&strWebAction=center&type=peers#seeds' -H 'Cookie: uid={}; pass={}' -o test1.txt".format(myUid, myPass))


def parseData(data):
    return re.findall('onmouseover="return buildTable\\(\'([^\']+)\'', data)


def shrinkFilename(fn):
    l = max(int(len(fn) * 0.2), 4)
    return fn[:-l]


with open('test1.txt', 'r', encoding='utf-8', errors='ignore') as file:
    data = file.read()
    parsed = parseData(data)
    inSeed = []
    notInSeed = []
    for file in os.listdir(myDownloadDir):
        path = os.path.join(myDownloadDir, file)
        filename = os.fsdecode(file)
        if os.path.isdir(path):
            if not any(filename in s for s in parsed):
                notInSeed.append([filename, 'd'])
            else:
                inSeed.append([filename, 'd'])
        else:
            if not any(shrinkFilename(filename) in s for s in parsed):
                notInSeed.append([filename, 'f'])
            else:
                inSeed.append([filename, 'f'])
    inSeed.sort(key=lambda x: x[0])
    notInSeed.sort(key=lambda x: x[0])
    print('In Seed:')
    for x in inSeed:
        print(x)
    print('NOT in Seed:')
    for x in notInSeed:
        print(x)

os.system('rm -fv test1.txt')
