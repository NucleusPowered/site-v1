---
layout: modulespec
title: Documentation Centre
header: Warp Module
moduleid: warp
modulename: Warp
---

## Introduction

The warp module allows you to define public facing warps for your players to use.

## Adding permissions to warps

Nucleus can assign a permission for each warp you create if you wish to have that level of control. In `main.conf`, set
`warp.separate-permissions` to `true` and run `/nucleus reload`. Each warp will be assigned the permission
`nucleus.warps.[warp name]`, which the player will be required to have before using it.

## Adding costs to warps

If you wish to charge for a particular warp, you can set the cost of a warp using the command

```
/warp cost <warp> <cost>
```

If you want to set a _default_ cost of a warp, you can set the configuration entry `warp.default-warp-cost` in `main.conf`.
Those with the `nucleus.warp.exempt.cost` permission will be exempt from _any_ cost.
