#!/usr/bin/python3

from sys import argv
from sevlib.severino import  Severino

sev = Severino()

commands = {

    'lista' : sev.shoppingList.parse

}

commands[argv[1]](*argv[2:])

