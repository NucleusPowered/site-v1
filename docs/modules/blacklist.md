---
layout: modulespec
title: Documentation Centre
header: Blacklist Module
moduleid: blacklist
modulename: Blacklist
---

## Introduction

The Blacklist module is intended as a lightweight protection system from players using and possessing certain items in the game
world.

Blacklist is **not** intended to be a wide ranging blocking system, but a quick solution for servers who only need to prevent
certain items on the server. Consider disabling the blacklist module if you have an alternative protection plugin.

## Configuration

There are two entries in the `main.conf` file in the `blacklist` section:

* `useReplacement`: if true, confiscated items will be replaced by the item specified in `replacement`.

Actions to block are now determined by item, rather than globally.

## Blacklisting items in `items.conf`

The item blacklist is stored as part of the `items.conf` file, and can be edited by hand. The blacklist section of any
item id looks like the following:

```
"minecraft:emerald_block" {
    # A set of aliases that Nucleus recognises for this item. They all must be lowercase, and contain only letters, numbers, hyphens or underscores.
    ...
    blacklist {
        # Prevents the mining or placing of an item in the world.
        block-environment=true
        # Prevents the item being possesed.
        block-possesion=true
        # Prevents the item being used.
        block-use=true
    }
    ...
}
```

Once completed, use `/nucleus reload` to reload the file.

## Updating the blacklist via commands

In game, execute the `/blacklist set [-t <environment|possession|use>] [item ID] <true|false>` command. The `-t` flag is optional, if
 omitted, will affect all types of blacklisting. If no Item ID is provided, the item in your main hand is used instead.
