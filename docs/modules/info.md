---
layout: modulespec
title: Documentation Centre
header: Info Module
moduleid: info
modulename: Info
---

## Introduction

The Info module simply attempts to provide information to the player, in the form of either a Message Of The Day (MOTD), or
a series of info pages.

## Message Of The Day

Nucleus creates a file at `config/nucleus/motd.txt` that will be displayed on join to anyone with the `nucleus.motd.login`
permission, or if they run `/motd` (with the `nucleus.motd.base` permission). The text file supports Minecraft colour codes
prefixed with an ampersand (`&`), and will convert URLs automatically where it sees them.

To update the file, simply edit the file, Nucleus will pick up the updated contents automatically. If you want a different (or no) title for the MOTD,
this can be changed in the `main.conf` file, see `info.motd-title`.

The MOTD supports links and placeholder tokens, see [this page to see how tokens and links can be created.](../configuration/links-and-tokens.html)

## Server Info files

Nucleus creates a folder at `config/nucleus/info`, and drops two files into it, `color.txt` and `info.txt`. These form two
sections in `/info`. To create an additional sections, create a new text file (with the extension `.txt`) and save it in the
same folder. Upon `/nucleus reload` or a server restart, the contents of the file will be available for reading - the filename
(minus `.txt`) will appear in the `/info` list.

Editing an existing `.txt` file does not require the use of `/nucleus reload`.

When creating additional chapters, note the following:

* On case sensitive file systems, if files only differ by case, only one will be picked up.
* To add a custom title to a section, on the first line of the text file in question, start with a `#` and add the title
to that line. The title can be no longer than 50 characters.
* Colour codes and formatting are supported.
* URLs are supported.
* The info files also support the tokens [listed on this page.](../configuration/links-and-tokens.html)
* The permission to view info files is `nucleus.info.base`.