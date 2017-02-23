---
layout: modulespec
title: Documentation Centre
header: Administration Module
moduleid: kick
modulename: Kick
---

## Introduction

This module adds provision for kicking players in a more flexible way than vanilla Minecraft can, adding the ability to
add reasons to kicks, and kicking all players with the option of turning on a whitelist.

## Kicking all players

Nucleus provides the command `/kickall [-w] [reason]` to kick all players from the server (except yourself, if you are a player
executing this command). By specifying the `-w` flag, Nucleus will activate the whitelist at the same time, preventing your 
eager players from rejoining the server before you get the chance to turn it on yourself.