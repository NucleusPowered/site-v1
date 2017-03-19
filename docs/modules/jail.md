---
layout: modulespec
title: Documentation Centre
header: Jail Module
moduleid: jail
modulename: Jail
---

## Introduction

The Jail module allows for server staff to punish players by warping them to a specific place in the game world, and disabling their ability
to interact with the world around them, both through commands and physical interaction. Typically, a "jail" will be a room with no means of
escape. 

The jail module can jail players temporarily or permanently. Server admins can set the location of jails on the game server, and server owners
can define commands that the players are allowed to run, along with whether jailed players are also muted, within `main.conf`.

Jailings are usually intended for minor punishments and often have an expiry on them, but their use is completely up to server owners.

The jail module defines three main commands, `/jail` which contains commands to punish players, `/checkjail` to see if a player is actually jailed
for how long, and why, and `/jails` which contains commands that defines and displays the actual location of jails.

## Defining and Removing Jails

In order to be able to use the jail module effectively, at least one jail must be defined with a name. To do this, stand in the spot that
you wish to create a jail, and run `/jails set [name]`, where `[name]` is the alphanumeric name of the jail you wish to set.

To remove a jail, run the command `/jails remove [name]`. The jail will be removed.

The list of defined jails can be obtained by running `/jails`, and information on a specific jail can be found by running `/jails info [name]`.

## Jailing Players

Once a jail has been defined, a player can be jailed by running the command 

```
/jail <player> <jail> [time] [reason]
```

The `player` and `jail` arguments are _required_, where `<jail>` is the name of the jail you wish to send the player to.

The `reason` argument is optional, but if specified, will be displayed to the jailed player

The `time` argument is optional, but if specified, is of the [Timespan Argument](../arguments.html#timespan) format. 
For example: if you want to jail `Notch` in the `grief` jail for 3 hours, 45 minutes, the command would be:

```
/jail Notch grief 3h45m Jailed by example!
```

If a timed jail is given to a player who is not currently logged on, their time in jail will _start_ when they next log in. By default,
time towards their jail sentence will include both time where the player is online AND offline, unless `jail-time-counts-online-only` is 
set to `true` in `main.conf`.

## Unjailing Players

To unjail a player, simply run `/jail <player>`.

## Permission Contexts

When players are jailed, Nucleus adds permission contexts to the player permission set, so that you can change a player's
permissions when they are jailed. This is useful to be able to prevent the player from performing additional tasks, though
Nucleus automatically blocks most commands and actions anyway.

Nucleus applies two contexts:

* `nucleus_jailed` will simply have the value "true" if the player is jailed.
* `nucleus_jail` will contain the name of the jail the player is jailed in.

Refer to your permission plugin documentation on how to set permissions on contexts.

## Configuration

The `jail` module has several entries in `main.conf`:

* `allowed-commands` specifies the commands that players are allowed to run whilst in jail. By default, the 
commands are primarily chat and message based commands.
* `mute-when-jailed`, if set to `true`, will also mute players (in global chat only) that are in jail. This defaults to `false`.
* `jail-time-counts-online-only`, if `true`, a player's time in jail will only be counted when they are online.