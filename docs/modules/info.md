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
permission, or if they run `/motd` (with the `nucleus.motd.base` permission). The text file supports Miencraft colour codes
prefixed with an ampersand (`&`), and will convert URLs automatically where it sees them.

To update the file, simply edit the file, then run `/nucleus reload`. If you want a different (or no) title for the MOTD,
this can be changed in the `main.conf` file, see `info.motd-title`.

The MOTD supports tokens, see the section "Tokens/Variables" below, and links, see the "Links in /info and /motd" section.

## Server Info files

Nucleus creates a folder at `config/nucleus/info`, and drops two files into it, `color.txt` and `info.txt`. These form two
sections in `/info`. To create an additional sections, create a new text file (with the extension `.txt`) and save it in the
same folder. Upon `/nucleus reload` or a server restart, the contents of the file will be available for reading - the filename
(minus `.txt`) will appear in the `/info` list.

When creating additional chapters, note the following:

* On case sensitive file systems, if files only differ by case, only one will be picked up.
* To add a custom title to a section, on the first line of the text file in question, start with a `#` and add the title
to that line. The title can be no longer than 50 characters.
* Colour codes and formatting are supported.
* URLs are supported.
* The info files also support the tokens in the `Tokens/Variables` section.
* The permission to view info files is `nucleus.info.base`.

## Links in /info and /motd

Links can be included in info and motd files using limited markdown syntax.

* `http://nucleuspowered.org` - creates a link automatically
* `[Hello](http://nucleuspowered.org)` - creates a link titled `Hello` to `http://nucleuspowered.org`
* `[Rules](/rules)` - creates a link titled `Rules` that will run `/rules` when clicked.
* `[Blah](/msg {{player}} player` - Create a link that sends the message "player" to the player who is clicking the link entitled `Blah`.

## Tokens/Variables

The following tokens can be used in both the `motd` and `info` files, and will be replaced at runtime.

{% raw %}
* `{{maxplayers}}` - maximum number of players that the server can hold.
* `{{onlineplayers}}` - number of players online right now.
* `{{currentworld}}` - the name of the current world.
* `{{time}}` - the time on the current world.
{% endraw %}
