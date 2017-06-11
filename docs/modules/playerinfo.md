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

If you want a bit more control over your groups, then Nucleus allows for that too.

### Group weighting

Groups can have a list weight, determining which one is used as a display group if a player has more than one group, overriding Nucleus'
standard ordering. By adding the permission option  `nucleus.list.weight` on the group with a number, a player in multiple groups will be
displayed as part of the highest weighted group.

### Group aliasing

Groups can be given an friendly display name in list, and multiple groups can have the same alias, so that players from both
groups will be shown as if they are in a single group.

This can be defined in `main.conf`, `playerinfo.list.list-grouping-by-permission.group-aliases`.
You can add pairings like so:

```hocon
permissionGroup="Friendly Name",
permissionGroup2="Friendly Name",
permissionGroup3="Friendly Name 2"
```

In this example, players in permission groups "permissionGroup" and "permissionGroup2" will be under the name 
"Friendly Name", whilst those in "permissionGroup3" will be under the name "Friendly Name 2".

The option `use-aliases-only`, if true, will only display a group if it has an explicit alias, else collapse into the default group.

### Group ordering

The group ordering can be defined in `main.conf`, `playerinfo.list.list-grouping-by-permission.group-order`.
Groups can be listed in order here, and this will be reflected in `/list`. Note that you must keep the [], 
and it's a comma separated list, where the names are enclosed in " characters.

Any group aliases in this list will be listed in this order, above all other groups, which will be displayed in alphabetical order below.



## Using `/seen`

`/seen [player]` will display all relevant information about a player. In the future, it is anticipated that plugins can
hook into Nucleus' `/seen`, allowing this command to be a central point for player information. 