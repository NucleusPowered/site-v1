---
layout: modulespec
title: Documentation Centre
header: Mob Module
moduleid: mob
modulename: Mob
---

## Introduction

The mob module allows for the spawning in of mobs using the `/spawnmob` command.

## Spawning in mobs

The command `/spawnmob [player] <mob> <amount>` allows the user to spawn mobs around the specified player (or themselves,
if not specified), the mob, and the number of mobs. Vanilla mobs do not require a prefix (but you may use the prefix `minecraft:`),
other mob types must be prefixed by the mod's ID.

So, to spawn in 20 chickens around you, use the command `/spawnmob chicken 20` or `/spawnmob minecraft:chicken 20`.

Administrators can limit the number of mobs that are spawned in at once by setting the desired maximum for the config
option `mob.max-mobs-to-spawn` in the `main.conf` file. This defaults to 20.

## Future commands

Nucleus will gain the ability to create mob spawners, once Sponge implements what is required.