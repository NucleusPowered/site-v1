---
layout: modulespec
title: Documentation Centre
header: Spawn Module
moduleid: spawn
modulename: Spawn
---

## Introduction

The Spawn module controls the player spawn logic on your server.

## Setting the spawn point

To set a spawn point on your server, that is, the point where all players will start when entering a world for the first
time or respawning after death, use the command `/setspawn` as a player at the point where you want players to spawn. 
Nucleus will set the position at your feet and Minecraft will use that point as a future spawn point. Nucleus will also 
store your player's rotation and attempt to set the rotation of any player who spawns.

Spawn points are per world, and can be warped to using the `/spawn [world]` command - if the world is omitted, you will
warp to the spawn point of the current world. 

## First Spawn

Nucleus provides the concept of a "first spawn" point. This allows server owners to have a specific, separate, spawn 
point for new players. This can be set using the `/setfirstspawn` command, and warped to using `/firstspawn`.

It is **strongly** advised that if you use the first spawn mechanic that you also set the gamemode `spawnRadius` to 
`0`, that is, run the command `/gamerule spawnRadius 0`.  

## Customising player spawning

By default, Nucleus follows Minecraft/Sponge defaults where possible when it comes to spawning, specifically, that
respawn after death will happen on the same world, and logging out of a server and subsequently logging in again will
keep you in the same place as you were in before.

Nucleus does provide options to change that, however. If you wish for players to return to the spawn point of the world
they logged out on when logging in, set `spawn-on-login` to `true`. This can then be overriden for selected worlds using
the `spawn-on-login-exempt-worlds` list.

For those who want `/spawn` to refer to a _single_ spawn point on a specific world, rather than one per world, Nucleus
offers the concept of a `global-spawn`. By specifying a world in `global-spawn.target-spawn-world`, any of the actions
in `global-spawn` set to `true`  will warp people to the spawn point specified as the target world, rather than the
current world. 

## `/spawn` per world permissions

The config options `per-world-permissions` is ordinarily set to false, but if true, this allows fine grain control over
the worlds that a specific player can spawn to using the `/spawn` command.