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

To create a world, the command is:

`/world create [name] [dimension] [generator] [gamemode] [difficulty]`

Dimension refers to the type of world (that is, overworld, nether or the_end), and generator refers to the type of generator
 used to generate the world. This may be a custom generator provided by another plugin.

Future releases may make some of the options optional.

## World Borders and Pre-Generating Chunks

Nucleus uses Minecraft's in built world border support and makes it easy to update or change it.

To display the current world border information, run the command `/world border [world]`. If you omit the world argument, it will default to the world you are currently in.

To set the world border, run the command `/world border set [world] [centre-x] [centre-z] &lt;diameter&gt; [delay]`. Only the diameter is mandatory if you are a player in the world, otherwise
all arguments are required. `centre-x` and `centre-z` refer to the new centre of the world border, and delay defines, in seconds, how long it will take Minecraft to change to the diameter of the world
border from the old one.

To pre-generate chunks in the world, run the command `/world border gen [world]`, where the world is optional if you are a player in a world. Sponge will start pre-generating chunks. If you wish to
stop the pre-generation early, use `/world border cancelgen [world]`. Restarting the server will also cancel the pre-generation.