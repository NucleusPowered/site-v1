---
layout: modulespec
title: Documentation Centre
header: Random Teleport Module
moduleid: rtp
modulename: Random Teleport
---

## Introduction

The RTP module allows players to request to be teleported to another random place on your map.

## Configuring RTP on a per-world basis

While the configuration file should be self explanatory (see the configuration tab above), note that you may
configure worlds on a per-world basis. To do so, copy and paste the `example` block in `world-overrides`,
renaming `example` to the name of the world you wish to provide an override for. So, for an override for `DIM-1`,
you may have something like below:

```
world-overrides {
    DIM-1 {
        # The default RTP kernel to use with /rtp. The default options are:
        # 
        # * "nucleus:default": standard RTP, with the min/max radius centred around the spawn point
        # * "nucleus:surface_only": RTP which will attempt to only pick a surface (must see sky) location, with the min/max radius centred around the spawn point
        # * "nucleus:around_player": RTP which is like default, but the random position will depend on the player's current position, not the spawn point
        # * "nucleus:around_player_surface": RTP which is like surface only, but the random position will depend on the player's current position, not the spawn point
        # 
        # Other plugins might add their own kernels, in which case they will give you an ID to use here.
        default-method="nucleus:around_player"
        maximum-y=150
        min-radius=0
        minimum-y=50
        radius=500
    }
}
```

## Selecting an RTP Kernel

The RTP system uses what is known as a **kernel** in order to decide whether a randomly selected location
is safe. Nucleus comes with four kernels:

* `nucleus:default` - tries to find any location that a player can be safely teleported to. 
The search for a space is centred on the world spawn and within the minimum and maximum radius 
specified in the configuration. The player may end up in a cave.
* `nucleus:surface_only` - tries to find a location that is safe for a player and can see the sky directly above.
The search for a space is centred on the world spawn and within the minimum and maximum radius 
specified in the configuration. The player will not end up in a cave.
* `nucleus:around_player` - tries to find any location that a player can be safely teleported to.
The search for a space is centred on the player's current location and within the minimum and 
maximum radius specified in the configuration. The player may end up in a cave.
* `nucleus:around_player_surface` -  tries to find a location that is safe for a player and can see the sky directly above. 
The search for a space is centred on the player's current location and within the minimum and 
maximum radius specified in the configuration. The player will not end up in a cave.

The server preferred kernel can be set in the configuration under the `rtp.default-method` config key.

Other plugins may supply RTP kernels which can find locations based on their own criteria. They must
implement `io.github.nucleuspowered.nucleus.api.rtp.RTPKernel`, and register their kernels with the Sponge
Registry if they wish to be usable as a configuration option.