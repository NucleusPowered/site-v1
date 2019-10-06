---
layout: standardheadmd
title: Terrafirma Quick Guide
header: Terrafirma Quick Guide
nolink: true
---

## Initial Setup

Terrafirma will create a config for you in the `config/terrafirma/terrafirma.conf` file, with
the `terrafirma:example` modifier. The default will look something like below. 

```hocon
# A list of generators. In game, they will be represented by the ID "terrafirma:<name>"
generators {
    example {
        # The biome for the generator.
        # 
        # NOTE: Setting this to something other than minecraft:void may cause unintended populator effects, such 
        # as turning stone to gravel between dirt and stone levels.
        biome-type="minecraft:void"
        # Sets the layers in the flat world. In order, from bottom up.
        layers=[
            {
                # The block for this layer.
                block="minecraft:bedrock"
                # The number of layers for this block.
                layers=2
            },
            {
                # The block for this layer.
                block="minecraft:obsidian"
                # The number of layers for this block.
                layers=1
            },
            {
                # The block for this layer.
                block="minecraft:stone"
                # The number of layers for this block.
                layers=3
            },
            {
                # The block for this layer.
                block="minecraft:dirt"
                # The number of layers for this block.
                layers=3
            },
            {
                # The block for this layer.
                block="minecraft:grass"
                # The number of layers for this block.
                layers=1
            }
        ]
    }
}
# Config version number. Do not alter.
version=1
```

## Getting valid block IDs

Available block IDs can be discovered using the `/genblocksfile` command, which will print the block IDs to a file in the Terrafirma
config directory (requiring the `terrafirma.dumpblocks` permission). The block IDs accept both standard IDs and block states, particularly
with the variant state. When 1.14.x comes around, block states won't be necessary.

[For the IDs for a vanilla Minecraft setup, you can look at this text file.](default_blocks.txt)

## Specifying a flat world

You could add a modifier that creates 1 layer of bedrock, 10 layers of dirt, 3 layers of stone and one layer of gravel to a "test" modifier 
by copying the `example` generator, pasting it below the example, then replacing the layers with the blocks and amounts as you see fit. 
You should have something like below (this is a full config file, the new "test" modifier is at the bottom):

```hocon
# A list of generators. In game, they will be represented by the ID "terrafirma:<name>"
generators {
    example {
        # The biome for the generator.
        # 
        # NOTE: Setting this to something other than minecraft:void may cause unintended populator effects, such 
        # as turning stone to gravel between dirt and stone levels.
        biome-type="minecraft:void"
        # Sets the layers in the flat world. In order, from bottom up.
        layers=[
            {
                # The block for this layer.
                block="minecraft:bedrock"
                # The number of layers for this block.
                layers=2
            },
            {
                # The block for this layer.
                block="minecraft:obsidian"
                # The number of layers for this block.
                layers=1
            },
            {
                # The block for this layer.
                block="minecraft:stone"
                # The number of layers for this block.
                layers=3
            },
            {
                # The block for this layer.
                block="minecraft:dirt"
                # The number of layers for this block.
                layers=3
            },
            {
                # The block for this layer.
                block="minecraft:grass"
                # The number of layers for this block.
                layers=1
            }
        ]
    }
    test {
        # The biome for the generator.
        # 
        # NOTE: Setting this to something other than minecraft:void may cause unintended populator effects, such 
        # as turning stone to gravel between dirt and stone levels.
        biome-type="minecraft:void"
        # Sets the layers in the flat world. In order, from bottom up.
        layers=[
            {
                # The block for this layer.
                block="minecraft:bedrock"
                # The number of layers for this block.
                layers=1
            },
            {
                # The block for this layer.
                block="minecraft:dirt"
                # The number of layers for this block.
                layers=10
            },
            {
                # The block for this layer.
                block="minecraft:stone"
                # The number of layers for this block.
                layers=3
            },
            {
                # The block for this layer.
                block="minecraft:gravel"
                # The number of layers for this block.
                layers=1
            }
        ]
    }
}
# Config version number. Do not alter.
version=1
```

You might want to add a sandstone double slab in the middle instead, and a layer of dark oak planks on top! The generator might
then look like (not a full config file this time!):

```hocon
    test2 {
        # The biome for the generator.
        # 
        # NOTE: Setting this to something other than minecraft:void may cause unintended populator effects, suchas turning stone to gravel between dirt and stone levels.
        biome-type="minecraft:void"
        # Sets the layers in the flat world. In order, from bottom up.
        layers=[
            {
                # The block for this layer.
                block="minecraft:bedrock"
                # The number of layers for this block.
                layers=2
            },
            {
                # The block for this layer.
                block="minecraft:obsidian"
                # The number of layers for this block.
                layers=1
            },
            {
                # The block for this layer.
                block="minecraft:double_stone_slab[variant=sandstone]"
                # The number of layers for this block.
                layers=5
            },
            {
                # The block for this layer.
                block="minecraft:dirt"
                # The number of layers for this block.
                layers=3
            },
            {
                # The block for this layer.
                block="minecraft:grass"
                # The number of layers for this block.
                layers=1
            },
            # minecraft:double_wooden_slab[variant=dark_oak]
            {
                # The block for this layer.
                block="minecraft:double_wooden_slab[variant=dark_oak]"
                # The number of layers for this block.
                layers=1
            }
        ]
    }
```

Any valid `BlockState` can be used, not just those generated in the IDs file. Once you have created all your generators, you must restart the server in order to be able to use them.

## Using the generator

The generator is strictly a "generator modifier". How you use modifiers depends on the world management plugin you are using. The ID of the modifier
will be of the form `terrafirma:<nameofgenerator>` 

As an example, if you are using Nucleus, you can create a world with the name "testworld" using the modifier "test" with the following command:

```
/world create -m terrafirma:test testworld
``` 

If all goes well, the world will be generated as you asked!

## A note on Biomes

Note that the biome is of the "minecraft:void" type. If you set it to a different biome type, there _may_ be other side effects that
you may not be expecting.