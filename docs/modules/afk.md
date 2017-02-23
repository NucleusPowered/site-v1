---
layout: modulespec
title: Documentation Centre
header: AFK Module
moduleid: afk
modulename: AFK
---

## Introduction

The AFK module allows a user to mark themselves as "away from keyboard". This can be a manual process, or an automatic
process after an admin defined number of seconds.

## Configuration

There are two entries in the `main.conf` file in the `afk` section:

* `afktime`: time in seconds that a player is inactive before the player automatically gets marked as AFK. Defaults to 300 seconds. Set to 0 to disable.
* `afktimetokick`: time in seconds that a player is inactive before the player automatically gets kicked. Defaults to disabled - set to 0 to disable.

## Per-user/group AFK limits

Nucleus also makes use of permission options to be able to set different limits on different groups. They are:

* `nucleus.afk.toggletime`: the same as `afktime` in the configuration, but for a specific group.
* `nucleus.afk.kicktime`: the same as `afktimetokick` in the configuration, but for a specific group. 

Consult your permissions plugin for how to set these, for convenience, the relevant commands for popular plugins are below:

{% include permissionblock.html cmdtype="groupOption" user="[group]" option="nucleus.afk.toggletime" value="[time in seconds]" %}
{% include permissionblock.html cmdtype="groupOption" user="[group]" option="nucleus.afk.kicktime" value="[time in seconds]" %}

## Note: using `/afkrefresh`

Because AFK has the potential to do a lot of permission checks, Nucleus caches player permissions for two minutes at a time. If you change a player's group
and it affects their AFK permissions, run `/afkrefresh`. Nucleus will discard the cache and recheck all permissions as needed.