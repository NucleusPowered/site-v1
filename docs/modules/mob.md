---
layout: modulespec
title: Documentation Centre
header: Mob Module
moduleid: mob
modulename: Mob
---

## Introduction

The mob module allows for the spawning in of mobs using the `/spawnmob` command.

## Spawning in mobs

The command `/spawnmob [player] <mob> <amount>` allows the user to spawn mobs around the specified player (or themselves,
if not specified), the mob, and the number of mobs. Vanilla mobs do not require a prefix (but you may use the prefix `minecraft:`),
other mob types must be prefixed by the mod's ID.

So, to spawn in 20 chickens around you, use the command `/spawnmob chicken 20` or `/spawnmob minecraft:chicken 20`.

Administrators can limit the number of mobs that are spawned in at once by setting the desired maximum for the config
option `mob.max-mobs-to-spawn` in the `main.conf` file. This defaults to 20.

### Limiting mobs that can be spawned

Nucleus can limit the types of mobs that are spawned in by players. To enable this, set `mob.separate-mob-spawning-permissions`
to `true` in `main.conf`. 

Nucleus will make an additional permission check to check whether a player can spawn a mob. The permission is 
`nucleus.spawnmob.mobs.<mobid>`, where the mobid has any ":" (colons) replaced with "." (period). 
So, the permission to allow a player to spawn a creeper in would be `nucleus.spawnmob.mobs.minecraft.creeper`. 
This allows server owners to allow all vanilla mobs with the permission `nucleus.spawnmob.mobs.minecraft`.

## Blocking certain mobs from spawning in certain worlds

Nucleus can control the mobs that cannot be spawned into a world, either by command, spawner or naturally. In `main.conf`, 
`mob.spawning-blocks` will look like this by default:

```hocon
# Controls the mobs that cannot be spawned. Each section is world specific, with the key being the world name in question, which is case sensitive.
spawning-blocks {
    DIM-1 {
        # The full IDs of the mobs to block. Minecraft mobs have an id starting with "minecraft:"
        block-mobs-with-ids=[]
        # If true, all vanilla mobs will be blocked in this world.
        block-vanilla-mobs=false
    }
    DIM1 {
        # The full IDs of the mobs to block. Minecraft mobs have an id starting with "minecraft:"
        block-mobs-with-ids=[]
        # If true, all vanilla mobs will be blocked in this world.
        block-vanilla-mobs=false
    }
    world {
        # The full IDs of the mobs to block. Minecraft mobs have an id starting with "minecraft:"
        block-mobs-with-ids=[]
        # If true, all vanilla mobs will be blocked in this world.
        block-vanilla-mobs=false
    }
}
```

Each section is world specific, with the key being the world name in question, which is case sensitive. Mob IDs must be the 
full ID, so any vanilla Minecraft mob would be prefixed with `minecraft:`. If you wanted to block creepers and spiders from the overworld (`world`)
ghasts from the nether (`DIM-1`), and all vanilla mobs from the end (`DIM1`), you would change the block to look something like this:

```hocon
# Controls the mobs that cannot be spawned. Each section is world specific, with the key being the world name in question, which is case sensitive.
spawning-blocks {
    DIM-1 {
        # The full IDs of the mobs to block. Minecraft mobs have an id starting with "minecraft:"
        block-mobs-with-ids=["minecraft:ghast"]
        # If true, all vanilla mobs will be blocked in this world.
        block-vanilla-mobs=false
    }
    DIM1 {
        # The full IDs of the mobs to block. Minecraft mobs have an id starting with "minecraft:"
        block-mobs-with-ids=[]
        # If true, all vanilla mobs will be blocked in this world.
        block-vanilla-mobs=true
    }
    world {
        # The full IDs of the mobs to block. Minecraft mobs have an id starting with "minecraft:"
        block-mobs-with-ids=["minecraft:creeper", "minecraft:spider"]
        # If true, all vanilla mobs will be blocked in this world.
        block-vanilla-mobs=false
    }
}
```

Note that in order for the HOCON to be valid, quote marks must be put around the mob IDs.

## Future commands

Nucleus will gain the ability to create mob spawners, once Sponge implements what is required.