---
layout: modulespec
title: Documentation Centre
header: Kits Module
moduleid: kit
modulename: Kit
---

## Introduction

Kits are sets of items that can be given out to players when a command is run. Kits can be restricted to certain players
using permissions, and can be set to only be redeemable once per set time frame.

## Using a kit

Simply run `/kit [name]`. If you have permissions, the money, and are not in a cooldown period for the kit, you will
recieve the items in the kit. Nucleus will warn you if some items were lost, and will not redeem the kit if your inventory
was full.

## Creating and Managing Kits

To create a kit:

* Change your inventory to be the contents of the kit.
* Run `/kit add [name]`, where the `name` is the name of the kit you want to create. This will create the kit with the
 contents of your inventory.

To set the cooldown on the kit, run `/kit setcooldown [name] [time]`, where the time interval is the format of the [Timespan Argument](../arguments.html#timespan),
for example, `/kit setcooldown kit1 6d` to set the cooldown for `kit1` to 6 days.

To set a cost for using the kit, run `/kit cost [name] [cost]`. Set the cost to 0 to remove the cost. The requires the use
of an economy plugin.

To change the contents of a kit, update your inventory to reflect what you want the contents of the kit to be, then run
`/kit set [name]`.

To delete a kit, run `/kit remove [name]`

## Per-Kit Permissions

It is possible to set per-kit permissions. To do so:

* In Nucleus' configuration file (`main.conf`), set the configuration option `kits.separate-permissions` to `true`.
* Reload the configuration file if the server is running (`/nucleus reload`)

The permission to use a kit is then `nucleus.kits.[name]`, where `name` is the kit's name. This is in addition to the main
permission to use a kit, `nucleus.kit.base`.