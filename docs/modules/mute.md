---
layout: modulespec
title: Documentation Centre
header: Mute Module
moduleid: mute
modulename: Mute
---

## Introduction

The Mute module allows for server staff to punish players who break chat rules by preventing them from speaking in global chat or sending messages.
There is also a function to enact a "global" mute, and whitelist, or "voice" players 

The mute module can jail players temporarily or permanently. Global mutes will only last over the lifetime of a server process, and will be deactivated
when the server is restarted.

Use the `/checkmute <player>` command to see details surrounding a player's muting.

## Muting and Unmuting Players

A player can be muted by running the command 

```
/mute <player> [time] [reason]
```

The `player` argument is _required_.

The `reason` argument is optional, but if specified, will be displayed to the mute player whenever they try to speak or
send a message.

The `time` argument is optional, but if specified, is of the [Timespan Argument](../arguments.html#timespan) format. 
For example: if you want to mute `Notch` for 3 hours, 45 minutes, the command would be:

```
/mute Notch 3h45m Muted by example!
```

If a timed mute is given to a player who is not currently logged on, their mute will _start_ when they next log in. By default,
time towards a mute will include both time where the player is online AND offline, unless `mute-time-counts-online-only` is 
set to `true` in `main.conf`.

## Checking player/server mutes

The command `/checkmute [player]` allows you to check a player's mute status. To see everyone currently muted on the server
in question, run `/checkmuted`.

## Permission Contexts

When players are mute, Nucleus adds a permission context to the player permission set, so that you can change a player's
permissions when they are muted. This is useful to be able to prevent the player from performing additional tasks, though
Nucleus automatically blocks most chat commands and actions.

Nucleus applies one context:

* `nucleus_muted` will simply have the value "true" if the player is muted.

Refer to your permission plugin documentation on how to set permissions on contexts.

## Global Mute

There are times where you may need to mute the server. The command `/globalmute [toggle]` allows you to do this. The command
can either be run as a toggle, flipping between on or off, or specified with either `true` or `false`.
 
When the server is muted, only those with the `nucleus.globalmute.voice.auto` permission are allowed to speak. To grant
this permission to other players temporarily, grant them "voice" using the `/voice <player>` command. This status is
automatically removed when the global mute ends.

## Configuration

The `mute` module has several entries in `main.conf`:

* `block-commands` specifies the commands that players cannot run whilst in muted. By default, the commands are primarily 
chat and message based commands.
* `maximum-mute-length` specifies the maximum time, in seconds, that a player can be muted for, unless the player issuing the
mute has the `nucleus.mute.exempt.length` permission. If this is set to `-1`, then no limit is applied and all players with
the mute command can mute players permanently.
* `see-muted-chat`, if set to `true`, will allow those with the `nucleus.mute.seemutedchat` permission to see players who
try to chat, but are currently muted.
* `muted-chat-tag` is the tag that is placed at the start of any cancelled message that those with the `nucleus.mute.seemutedchat`
can see.
* `mute-time-counts-online-only`, if `true`, will only count time a player spends online as time served towards the mute.