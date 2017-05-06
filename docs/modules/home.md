---
layout: modulespec
title: Documentation Centre
header: Home Module
moduleid: home
modulename: Home
---

## Introduction

The Home module provides the ability for players to set personal warps. The number of homes can be limited through the use
of a compatible permissions plugin, such as PermissionsEx.

## Limiting the number of homes

By default, all users will only be able to set one home. This can be changed by using a permissions plugin that supports
setting options.

You can set an arbitary number of homes by setting the option `home-count` to the number of homes you wish the player/group
to have.

<em>For users:</em>

{% include permissionblock.html cmdtype="userOption" user="[user]" option="home-count" value="[number]" %}

<em>For groups:</em>

{% include permissionblock.html cmdtype="groupOption" user="[group]" option="home-count" value="[number]" %}

Consult the permissions plugin's documentation for more information on how to do this. If you wish a player to have an
unlimited number of homes, set the permission `nucleus.home.set.unlimited`.

## Setting Warmups and Cooldowns

This can be achieved using the `commands.conf` file. The options are `home.warmup` and `home.cooldown`, and are specified
in seconds. Note that if the selected home doesn't exist, then neither the warmup or the cooldown will start.

If the player moves, runs a command or is attacked during the warmup, the warp home is cancelled.
