---
layout: standardheadmd
title: Documentation Centre
header: Setting up permissions
---

## Introduction

While Nucleus keeps a comprehensive list of [commands](../commands2.html) and [permissions](../permissions.html), we realise
that there are a lot of them. We've added a way to easily add permissions using your favourite permission plugin.

## Preparing your Permissions Plugin

To reduce errors, Nucleus will check that the target group exists before trying to setup the permissions. Ensure you have
the groups you wish to use setup before you begin migration.

## Setting up the permissions

To setup the permissions, ensure you are either on the console, or on a user with the following:

* The permission `nucleus.nucleus.setupperms.base`
* Permissions to add permissions using your permissions plugin

Simply run the command `/nucleus setupperms [USER|MOD|ADMIN|NONE] <group>`, where `USER` is our suggested permissions
for users, `MOD` for moderators and `ADMIN` for admin staff. `NONE` permissions are not normally suggested (for example,
it contains things like AFK exemption), but are in their own role.

For the list of permissions, look at our [permission reference](../permissions.html).