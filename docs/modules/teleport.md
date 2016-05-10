---
layout: modulespec
title: Documentation Centre
header: Teleport Module
moduleid: teleport
modulename: Teleport
---

## Introduction

The Teleport module allows players to teleport to one another, with request based (`/tpa`, `/tpahere`) and standard
 (`/tp`, `/tphere`) teleportation methods. `/tptoggle` can be used by players to block most teleportations. A method to
 teleport players to specific points on the world is also available - `/tppos`.


## Setting Warmups and Cooldowns

This can be achieved using the `commands.conf` file for the commands `tpa`, `tpahere` and `teleport`. The options are
`warmup` and `cooldown`, and are specified in seconds. Note that each command has a specific warmup/cooldown, so
`/tpa` can have a 1 second warmup, while a standard `/tp` can have a 3 second warmup.

If the player moves, runs a command or is attacked during the warmup, the teleport is cancelled. The player is then free
to try again, a cooldown is only applied when the teleport is successful.

For `/tpa` and `/tpahere`, the warmup starts when the teleport request is accepted and acts on the player being teleported,
sending the request is instantaneous.

## Teleport Requests

Nucleus allows players to _request_ to teleport to a specific player, or vice versa, using the commands `/tpa` and `/tpahere`.
If a player receives a request, they are given 30 seconds to respond to the request, either by clicking on the "Accept" or "Deny"
links, or by using the commands `/tpaccept` or `/tpdeny`. If the request is accepted, any warmup runs,

## Overriding the Minecraft /tp command

By default, Nucleus overrides the `/tp` command with its own implementation, but provides ways to easily get the vanilla
behaviour:

* Use `/tpn`, which is an alias for the original Minecraft `/tp` command.
* In `commands.conf`, set `teleport.use-tp-command` to `false`. `/tp` will return to the Vanilla version, while `/teleport` will
still be the Nucleus version.
