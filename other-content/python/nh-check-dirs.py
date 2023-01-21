# CALL FOR EXAMPLE: python3 mypys1/nh-check-dirs.py ./downloads
# to check the downloads dir...

import sys
import os
import re


def has_zip(dir_name):
    rval = False
    for root, dirs, files in os.walk(dir_name):
        for dir in dirs:
            if re.search(r"(proof|subs)$", dir, re.IGNORECASE):
                rval = True
        for file in files:
            if re.search(r"\.(sfv|zip|rar|r\d+)$", file):
                rval = True
    return rval


def has_media(dir_name):
    rval = False
    for root, dirs, files in os.walk(dir_name):
        if re.search(r"(sample)$", root, re.IGNORECASE):
            continue
        for file in files:
            if re.search(r"\.(mp3|mp4|mkv|pdf)$", file):
                rval = True
    return rval


o = int(input("1 zips; 2 media; 3 both; 4 XOR; 5 zip, but no media; 6 media, but no zip: "))

# Configurate this os walk path if need to...!

for root, dirs, files in os.walk(str(sys.argv[1])):
    for dir in dirs:
        p = os.path.join(root, dir)
        if (o == 1 and has_zip(p)):
            print(p)
        if (o == 2 and has_media(p)):
            print(p)
        if (o == 3 and has_zip(p) and has_media(p)):
            print(p)
        if (o == 4 and (has_zip(p) != has_media(p))):
            print(p)
        if (o == 5 and has_zip(p) and not has_media(p)):
            print(p)
        if (o == 6 and not has_zip(p) and has_media(p)):
            print(p)
    break
