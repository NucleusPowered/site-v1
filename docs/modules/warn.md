---
layout: modulespec
title: Documentation Centre
header: Warnings Module
moduleid: warn
modulename: Warnings
---

## Introduction

The warnings module adds the ability to give warnings to players, this can help to keep track of bad behaviour. Users with permission can hand out warnings with an optional duration, if a duration is provided once it's end is reached it will be flagged as expired and hidden from view unless explicitly requested using the `--expired` flag with the `/checkwarnings` command.

## Warning a player

The syntax of the warn command is 

```
/warn <player> [<duration>] <reason?>
```

The duration is in the [Timespan Argument](../arguments.html#timespan) format. If no duration is provided the warning is set to the default length of time specified in the configuration.

## Checking a player's warnings

The command `/checkwarnings <player>` checks the active warnings of a player and displays them using the pagination service to the command source.

To display expired warnings, you can use on of the following flags:
- `--all` or `-a` to show all warnings (including expired).
- `--expired` or `-e`  to show expired warnings only.


## Expiring and clearing a warning

To remove a player's warning, you can either use `/checkwarnings` command and click on links in the chat, or use the `/removewarning` command. `

The syntax of the command is:

```
/removewarning [-remove|-r <remove>] <user> <index>
``` 

The index/ID can be obtained through `/checkwarnings`. To delete a warning permanently, even if expired warnings are on, add the `-r` flag.

## Clearing all warnings

The syntax to remove all of a player's warnings is:

```
/clearwarnings [-remove|-r <remove>] [-all|-a <all>] [-expired|-e <expired>] <player>
``` 

The following flags may be used:
- `--all` or `-a` removes all warnings permanently.
- `--expired` or `-e` removes all expired warnings only.
- `--remove` or `-r` which removes all active warnings permanently.

## Configuration

* `default-length` - The default length a warning is set to if no length is provided (in seconds), set to -1 for infinite or the maximum length. Default value: -1
* `expire-warnings` - If true, a record of players warnings will be kept as expired warnings. If false, they will be deleted instead. Default value: true
* `maximum-warn-length` - The maximum length a warning may last for (in seconds), set to -1 for no maximum. Default value: 604800 (1 week)
* `minimum-warn-length` - The minimum length a warning will last before expiring (in seconds), set to -1 for no minimum. Default value: -1
* `show-login` - If true, players will be shown their active warnings when they login. If false, they will not. Default value: true
* `action-command` - The command to execute when a player has a specific number of warnings. Defaults to tempbanning a player for a day.
* `warnings-before-action` - The number of active warnings a player has to attain before the `action-command` is run against them. Defaults to 5, can be disabled by setting to -1.