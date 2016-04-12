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