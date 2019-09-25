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

Nucleus assigns a permission for each warp you create. Each warp will be assigned the permission
`nucleus.warps.[warp name]` (where `[warp name]` is replaced with the name of your warp **lowercase**. 
The player will be required to have before using it. You will also need to ensure they have access to the warp command
if that it how you want them to use the warps - `nucleus.warp.base`.

## Adding costs to warps

If you wish to charge for a particular warp, you can set the cost of a warp using the command

```
/warp cost <warp> <cost>
```

If you want to set a _default_ cost of a warp, you can set the configuration entry `warp.default-warp-cost` in `main.conf`.
Those with the `nucleus.warp.exempt.cost` permission will be exempt from _any_ cost.

## Setting warp categories

If the option `warp.list-warps-by-category` is set to `true`, warps can be displayed in categories in `/warp list`. To set a
category for a warp, you can use the command:

`/warp setcategory [-n] [-r] <warp> [<category>]`

* `-n` indicates that you want to add a new category to the list, if you don't use this flag and the category doesn't exist yet, you'll 
be prompted to add this flag to confirm the creation.
* `-r` indicates you want to remove the category from the warp.

## Adding descriptions for warps and warp categories

Warp categories can have descriptions and display names, which also accept colour codes. They will be displayed on the `/warps` list, and can be managed using the following commands.

* `/warp category list` - lists all categories
* `/warp category setdisplayname [category] [& encoded name]` - sets a display name for a category.
* `/warp category setdescription [category] [& encoded description]` - sets a description for a category.
* `/warp category removedisplayname [category]` - removes the display name for a category.
* `/warp category removedescription [category]` - removes the description for a category.

Running the following commands for a category named "test":

* `/warp category setdisplayname test "&4Test &7Category"`
* `/warp category setdescription test "&bThis is a &ltest description"`

gives the following.

![warpcat](https://cloud.githubusercontent.com/assets/1904167/22942606/12e095a0-f2e2-11e6-844f-c12cb27bd665.png)

Warps can also have their own description, but for space reasons, these descriptions will be put into the hover that appears when you hover over a warp link. They can be set using the following command (or use `-r` to remove the description):

* `/warp setdescription [-r] [warp] [& encoded description]`

So, on warp "hello2", running the command `/warp setdescription hello2 "This is the warp location &awhere you will be greeted with a sunny disposition and a gentle wave of a hand!"` give the result:

![warp](https://cloud.githubusercontent.com/assets/1904167/22942644/41b22efc-f2e2-11e6-90c9-9e9d6f025d1d.png)

If you would rather put the description in the main menu, and have the cost/location appear in the tooltip, set `warp.show-warp-description-in-list` to
`true` in `main.conf`.