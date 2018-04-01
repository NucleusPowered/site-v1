---
layout: modulespec
title: Documentation Centre
header: Kit Module
moduleid: kit
modulename: Kit
lastupdate: 0.26
---

## Introduction

Kits are sets of items that can be given out to players when a command is run. Kits can be restricted to certain players
using permissions, and can be set to only be redeemable once per set time frame. You can also create a kit that is given to
every new player - what we call the "first join kit".

## Using a kit

Simply run `/kit [name]`. If you have permissions, the money, and are not in a cooldown period for the kit, you will
recieve the items in the kit. Nucleus will warn you if some items were lost, and will not redeem the kit if your inventory
was full.

You can see all kits you have access to by running `/kit list`. Kits you have permission for, but are currently in cooldown
or are one time kits that have been used, appear struck out.

## Creating and Managing Kits

To create a kit you can either:

* Run `/kit create [name]`. This will open an inventory window that allows you to add items to the kit like you would add items to a chest.
* Change your inventory to be the contents of the kit and run `/kit add [name]`, where the `name` is the name of the kit you want to create. This will create the kit with the
 contents of your inventory.

To set the cooldown on the kit, run `/kit setcooldown [name] [time]`, where the time interval is the format of the [Timespan Argument](../arguments.html#timespan),
for example, `/kit setcooldown kit1 6d` to set the cooldown for `kit1` to 6 days.

To set a kit as "one use only", run `/kit onetime [kit] [true|false]`.

To set a cost for using the kit, run `/kit cost [name] [cost]`. Set the cost to 0 to remove the cost. The requires the use
of an economy plugin.

To change the contents of a kit, you can either:

* Run `/kit edit [name]` and edit your kit using an inventory GUI.
* Update your inventory to reflect what you want the contents of the kit to be, then run `/kit set [name]`.

To delete a kit, run `/kit remove [name]`

If a player has used a kit and you wish to remove the cooldown or one-time use so they can use it again immediately, run
`/kit resetusage [player] [kit]`.

## Adding personalised items to kits

{% raw %}
You can put tokens like `{{name}}` and `{{displayname}}` on your item's display names and lore and put them into a kit. 
When redeemed, the tokens can be replaced - personalising the items (for example, a wooden stick with the item display name 
`{{name}}'s stick` can be put into a kit, which will become `dualspiral's stick` if `dualspiral` redeemed it).
{% endraw %}

You must, however, set `kit.process-tokens-in-lore` to `true` in `main.conf`, as this might cause a slight performance hit.

## Commands in Kits

Nucleus 0.25.0 introduced adding commands to kits. This does not apply to first join kits.

It's _very_ important to note that any command will be run by the console, _so only give the ability to add commands to kits to **highly** trusted players._ As a result, the kit command add permission, `kit.command.add.base` is in the `NONE` group for permissions to try to protect against rogue admins.

### Viewing the commands in a kit

`/kit command <kit>` lists the commands, and if you have permission to remove commands, they can be removed from this list too.

![List](https://i.gyazo.com/06d99dd309b4643c86fb934aac3eb348.png)

Permission: `nucleus.kit.command.base`

### Adding a command

{% raw %}
The command to add a command to a kit is `/kit command add <kit> <command>`, where the command should not start with a `/`, and anywhere you want to substitute the player's name, you should add `{{player}}`. 

So, to broadcast a player's name, you could write: `broadcast {{player}} just opened a kit`, and this would broadcast `dualspiral just opened a kit` if dualspiral opened the kit. Similarly, if you wanted to smite someone who opened a kit, then you'd use `smite {{player}}`, etc.
{% endraw %}

Permission: `nucleus.kit.command.add.base`

### Removing and clearing commands

To remove commands: `/kit command remove <kit> <command|index from list>`
To remove all commands: `/kit command clear`

We would normally recommend using the list to remove commands, but you can also type the full command to remove or use the (one-based) index from the `/kit command` list.

Permission: `nucleus.kit.command.remove.base`

### Edit GUI

There is an **experiemental** "edit" command which opens up an Inventory with books containing the commands that can be taken out, and replaced with new books. These books must only contain one command each, but can span multiple pages as long as no newlines exist.

You can try it with `/kit command edit <kit>`, with the permission `nucleus.kit.command.edit.base`. Same caveats apply as with the add command.

## First Join Kits (Initial Inventory)

Nucleus supports giving players items when they first join your server. Simply create a kit that contains the inventory
you want to give the players when they first join, then run `/kit setfirstjoin [kitname] true`.

This kit is not visible on `/kit list`, is not redeemable more than once and does not have a cost by default.

## Per-Kit Permissions

Nucleus operates on per kit permissions. The permission to use a kit is then `nucleus.kits.[name]`, where `name` is the kit's name.
This is in addition to the main permission to use a kit, `nucleus.kit.base`. If you wish to grant permissions for all kits, grant
`nucleus.kits`.