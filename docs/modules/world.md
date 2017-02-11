---
layout: modulespec
title: Documentation Centre
header: World Module
moduleid: world
modulename: World
---

## Introduction

The World module allows for basic World management, such as creating and deleting worlds, and setting world borders.

## Creating Worlds

To create a world, use the command `/world create [-g|--generator <generator>] [-d|--dimension <dimension>] [-gm|--gamemode <gamemode>] [-s|--seed <seed>] [-di|--difficulty <difficulty>] [-m|--modifier <modifier>] <name>`. 
The name is required. All other options in this command are optional, and are specified by flags. Each flag requires an argument after their names. These flags are:

* -d/--dimension <dimension>: the dimension to use as a base world type. Defaults to the overworld.
* -g/--generator <generator>: the world generator to use. Defaults to the default generator.
* -m/--modifier <modifier>: a world generator modifier to use. Can be specified multiple times for multiple modifiers.
* --di/--difficulty <difficulty>: the initial world difficulty. Defaults to normal.
* --gm/--gamemode <gamemode>: the default game mode for players in the world. Defaults to survival.
* -s/--seed <seed>: The seed to use to generate the world. If not specified, a random seed will be used.

Dimension refers to the type of world (that is, overworld, nether or the_end), and generator refers to the type of generator
 used to generate the world. This may be a custom generator provided by another plugin.

## Enabling, disabling, loading and unloading worlds.

Nucleus provides commands that allows admins to manage whether a world is loaded or not, or whether it can even be accessed. A world can be in one of the following states:

* **Loaded** - a world is loaded and accessible.
* **Unloaded** - a world is not loaded, but will be loaded if someone tries to access it.
* **Disabled** - a world is not loaded and is not accessible, meaning that a player trying to access it will fail.

The commands `/world load`, `/world unload`, `/world disable` and `/world enable` can change between these states.

## World Borders and Pre-Generating Chunks

Nucleus uses Minecraft's in built world border support and makes it easy to update or change it.

To display the current world border information, run the command `/world border [world]`. If you omit the world argument, it will default to the world you are currently in.

To set the world border, run the command `/world border set [world] [centre-x] [centre-z] &lt;diameter&gt; [delay]`. Only the diameter is mandatory if you are a player in the world, otherwise
all arguments are required. `centre-x` and `centre-z` refer to the new centre of the world border, and delay defines, in seconds, how long it will take Minecraft to change to the diameter of the world
border from the old one.

To pre-generate chunks in the world, run the command `/world border gen [world]`, where the world is optional if you are a player in a world. Sponge will start pre-generating chunks. If you wish to
stop the pre-generation early, use `/world border cancelgen [world]`. Restarting the server will also cancel the pre-generation.
