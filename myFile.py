import os
import json


lessonsDir = os.path.join(os.getcwd(),'lessons')
files = os.listdir(lessonsDir)
status = {}

def createLinks():
    links = []
    for each in files:
        id = each[0:2]
        path = '/lessons/'+ each[:-4]
        name = each[3:-4].replace('-', ' ')
        if name == "nextjs": name = "nextJS"
        thisDict = dict(id=id, name=name, path=path)
        links.append(thisDict)
    return sorted(links,key=lambda d:d['id'])

def completion_status():
    for each in files:
        id = each[0:2]
        name = each[:-4]
        status[name] = False
    return dict(sorted(status.items()))

root = os.getcwd()

file = open(root+'/utils/utils.js','w')
comment = '// this file is auto-generated by running myFile.py file \n'
file.write(comment)
file.write('export const links ='+json.dumps(createLinks())+'\n\n')
file.write('export const completion_status ='+json.dumps(completion_status())+"\n\n")
file.close()