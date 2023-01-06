#!/usr/bin/env python3
# -*- coding: utf-8 -*-

'''
This is a dumb solution to get an array of image files for the project.
Is there a smarter way to do this webpack? apparently.
Could I get it working on my computer? no…

sometimes, the universe says "do it the hard way"

i'll get webpack working later……
'''

import json

def createArray(object_array):
    print("= [", end="")
    for i in object_array:
        print('"' + i['name'] + '.png"', end=", ")
    print("]")

f = open('part_data.json')
data = json.load(f)
parts = data['part_dict']

createArray(parts['body'])
createArray(parts['char'])
createArray(parts['glider'])
createArray(parts['tire'])

f.close()


# Swapped to json file order to allow for faster lookups via id for part data
'''
import os

directory = './Sprites/'
folders = "charSprites,gliderSprites,kartSprites,tireSprites".split(",")

def createArray(directory):
    print(" = [", end="")
    for filename in os.listdir(directory):
        f = os.path.join(directory, filename)
        if filename == ".DS_Store": #cringe
            continue
        if os.path.isfile(f):
            print("\"" + filename + "\"", end=", ")
    print("]")



#  for i in folders:
    #  print(i, end="")
    #  createArray(directory + i)
'''
