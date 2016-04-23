---
layout: standardheadmd
title: Documentation Centre
header: Migrating from EssentialCmds
---

Nucleus allows for users to migrate their server data from EssentialCmds to Nucleus using one command.

## Pre-requisites

* A Sponge server
* EssentialCmds and Nucleus installed at the same time
* The permission node `nucleus.nucleus.migrate.base`

## What Does Nucleus Migrate?

### General Server Data

* Blacklisted items
* Warps
* Jail Locations
* World Spawns

### User Data

* Mute status
* Jail status
* Homes

## What Does Nucleus Not Migrate?

Nucleus is designed to not update your main user config files. In keeping with this, anything in your configuration files
will not be transferred over to Nucleus automatically. However, this is a good opportunity to review what is available in Nucleus.

This includes:

* Chat format - see the [Chat Module](../modules/chat.html) page for more information on this.
* AFK timers - see the [AFK module](../modules/afk.html)
* Ban data - this is stored in the Minecraft ban manager anyway, so needs no migration.

Nucleus is also unable to migrate permissions - but does send a suggested permission set to compatible permission plugins.
See the [Permission Reference](../permissions.html) for a list of the permissions available in Nucleus.

## Migrating

**Before you start**, it is an extremely good idea to whitelist your server.

Simply run `/nucleus migrate` and follow the instructions.