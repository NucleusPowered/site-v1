---
layout: modulespec
title: Documentation Centre
header: Item Module
moduleid: item
modulename: Item
---

## Introduction

The Item module allows you to manipulate items.

## Item Names & Lore

### Setting Item Names

The `/itemname` command affects the item currently in your hand, and has two subcommands, `set` and `clear`. Using
`/itemname set [name]`, a name can be applied to the item, which supports miencraft colour codes prefixed with an
ampersand (`&`). This name can be removed using `/itemname clear`.

### Setting Lore

Multiple lines of lore is supported. To do this, we have three subcommands for `/lore`, `set`, `add` and `clear`.

* `/lore set [message]` **removes** all the old lore from the item in your hand, and **sets** it to the message provided.
* `/lore add [message]` **adds** the message **as a new line** to the lore.
* `/lore clear` **removes** all the lore from the item.

Again, for the lore, colour codes are supported.

## Enchantments

Enchantments can be added to the item in your hand by using the command `/enchant [enchant] [level]`. If you use this command
and it would involve removing a current enchantment, add the flag `-o`. If you are trying to force an enchantment or
enchantment level onto an item which is not normally allowed (often referred to as "unsafe"), add the flag `-u`, though
this requires an extra permission (`nucleus.enchant.unsafe`).

## Other

Nucleus also allows users to repair the item in their hand using `/repair`, and to turn the item in their hand into a
full stack using `/more`