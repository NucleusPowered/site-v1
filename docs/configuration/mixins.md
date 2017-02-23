---
layout: standardheadmd
title: '- Mixins'
header: Nucleus Mixins
---

Nucleus Mixins is an optional plugin for Minecraft 1.10.2 servers that attempts to provide features by hooking into the Minecraft
internals. [You can get Nucleus Mixins from Ore.](https://ore.spongepowered.org/Nucleus/Nucleus-Mixins)

Unforatunately, due to the nature of core mods, Nucleus Mixins may not work with heavily modded servers. Known incompatibilities are
with DW20 and SkyFactory 3 modpacks.

### Improve `/invsee`

Without mixins, you have to be standing less than 8 blocks away from the target player to use `/invsee`. Mixins removes this restriction.
 
### Improve world pre-generation

Mixins adds calls into the main Minecraft codebase to allow world pregeneration to operate more smoothly. These improvements have been
integrated into Sponge for 1.11.2