---
layout: modulespec
title: Documentation Centre
header: Player Info Module
moduleid: playerinfo
modulename: Player Info
---

## Introduction

The Player Info module displays basic information about players on the server.

## Listing all players

Nucleus provides an enhanced version of the `/list` command that can be customised. In `main.conf`, if 
`playerinfo.list.group-by-permission-groups` is set to `true`, Nucleus will _try_ to group all players by their permission
groups. The group that is selected will be the one that it furthest in the inheritance chain - that is, has the longest chain
to a root group. If the group cannot be determined, the text in  `playerinfo.list.default-group-name` will be used as the
group name in the `/list`.

If you are running Multicraft, set `multicraft-compatibility` to `true`. This should send the original `/list` command to
the console when it is run from the console.

## Using `/seen`

`/seen [player]` will display all relevant information about a player. In the future, it is anticipated that plugins can
hook into Nucleus' `/seen`, allowing this command to be a central point for player information. 