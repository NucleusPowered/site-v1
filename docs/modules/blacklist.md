---
layout: modulespec
title: Documentation Centre
header: Blacklist Module
moduleid: blacklist
modulename: Blacklist
---

## Introduction

The Blacklist module is intended as a lightweight protection system from players using and possessing certain items in the game
world.

Blacklist is **not** intended to be a wide ranging blocking system, but a quick solution for servers who only need to prevent
certain items on the server. Consider disabling the blacklist module if you have an alternative protection plugin.

## Configuration

There are two entries in the `main.conf` file in the `blacklist` section:

* `environment`: if `true`, prevent interactions with blacklisted blocks in the game world.
* `inventory`: if `true`, prevent players from possessing blacklisted blocks.

## Adding blocks and items to the blacklist

In game, execute the `/blacklist add [item ID]` command, replacing the item ID with the ID of your item. If you are
unsure as to what is the ID is, hold the item and run `/iteminfo`, checking the Item ID.

Blacklisted items are currently stored in the `nucleus/general.json` file.