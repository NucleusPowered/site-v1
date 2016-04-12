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
to have. If you are using PermissionsEx, you can set the number of homes on a player using the command:

`/pex user {user} option home-count {number}`

Consult the permissions plugin's documentation for more information on how to do this. If you wish a player to have an
unlimted number of homes, set the permission `nucleus.home.set.unlimted`.