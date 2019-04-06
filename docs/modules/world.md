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

To create a world, use the command `/world create [flags] [worldname]`. 
The name is required. All other options in this command are optional, and are specified by flags. Each flag requires an argument after their names. These flags are:

* -d/--dimension <dimension>: the dimension to use as a base world type. Defaults to the overworld.
* -g/--generator <generator>: the world generator to use. Defaults to the default generator.
* -m/--modifier <modifier>: a world generator modifier to use. Can be specified multiple times for multiple modifiers.
* --di/--difficulty <difficulty>: the initial world difficulty. Defaults to normal.
* --gm/--gamemode <gamemode>: the default game mode for players in the world. Defaults to survival.
* -s/--seed <seed>: The seed to use to generate the world. If not specified, a random seed will be used.
* -i: Indicates that this world might exist and can be imported.
* -n/--nostructures: If specified, will not generate structures in the world
* -l/--loadonstartup <true|false>: If false, the world will not be loaded on startup. Defaults to true.
* -k/--keepspawnloaded <true|false>: If false, the spawn will not be kept loaded. Defaults to true.
* -c/--allowcommands <true|false>: If false, commands will not be allowed on the world. Defaults to true.
* -b/--bonuschest <true|false>: If false, the bonus chests will not be generated. Defaults to true.


Dimension refers to the type of world (that is, overworld, nether or the_end), and generator refers to the type of generator
 used to generate the world. This may be a custom generator provided by another plugin.

### Presets (`WorldArchetypes`) in `/world create`

By using the `-p` flag, you can specify a preset world type - to create a void world, 
you can now run `/world create -p the_void <name>`, and to create a skylands world, `
/world create -p the_skylands <name>`. Other presets might be available - depending on other plugins that might supply
`WorldArchetypes`.

### Importing Worlds

To import an existing world, place a copy of the world, with the directory name that reflects the name of the world you want to import
within the server `world/` directory (or whatever your default/primary world name is, as set in `server.properties`). Then, run the command
`/world create -i [world name]`, and the import process should start for you.

## Enabling, disabling, loading and unloading worlds.

Nucleus provides commands that allows admins to manage whether a world is loaded or not, or whether it can even be accessed. A world can be in one of the following states:

* **Loaded** - a world is loaded and accessible.
* **Unloaded** - a world is not loaded, but will be loaded if someone tries to access it.
* **Disabled** - a world is not loaded and is not accessible, meaning that a player trying to access it will fail.

The commands `/world load`, `/world unload`, `/world disable` and `/world enable` can change between these states.

Note that the "default" worlds cannot be disabled as of right now.

## Deleting worlds

Nucleus can attempt to delete worlds for you. Use the `/world delete [world]` command, and Nucleus will attempt to remove
all traces of the world from your disc. Be careful, once it's gone, you can't get it back if you haven't backed it up first!

## World Borders

Nucleus uses Minecraft's in built world border support and makes it easy to update or change it.

To display the current world border information, run the command `/world border [world]`. If you omit the world argument, it will default to the world you are currently in.

To set the world border, run the command `/world border set [world] [centre-x] [centre-z] <diameter> [delay]`. Only the diameter is mandatory if you are a player in the world, otherwise
all arguments are required. The `diameter` is the size of the border from edge to edge (twice the distance from the centre to the edge). 
`centre-x` and `centre-z` refer to the new centre of the world border, and delay defines, in seconds, how long it will take Minecraft to change to the diameter of the world
border from the old one, defaulting to 0 - instantaneous change.

## Pre-Generating Chunks

For more information on _why_ you should do this, [see this entry in the FAQs.](../faqs.html#world-pregen)

To pre-generate chunks in the world, run the command `/world border gen [world]`, where the world is optional if you are a player in a world. 
Sponge will start pre-generating chunks. If you wish to stop the pre-generation early, use `/world border cancelgen [world]`. 
Restarting the server will also cancel the pre-generation unless the command was run with the `-r` flag.

If you want to try to run the pre-generation faster, you can change the same interval to be much higher, and run in "aggressive" mode. Adding
`-a` to the command indicates aggresive mode, where 90% of tick time is dedicated to the generation routines, and memory checks are turned off.
To change the save interval, add `--save <time>` to your command, where `<time>` is a [Timespan Argument](../arguments.html#timespan).

## World Access Permissions

If you wish to prevent access to certain worlds, settings separate-permissions in the Nucleus Worlds configuration will enable the ability to use permissions to restrict access to worlds.

Consideration has been taking for end portal teleporting, and will teleport the player to a near safe location if they would be in danger.

The permission format is `nucleus.worlds.[world name]`
