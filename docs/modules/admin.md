---
layout: modulespec
title: Documentation Centre
header: Administration Module
moduleid: admin
modulename: Administration
---

## Introduction

The Administration Module contains commands that are designed to be used by server owners and administrators.

Not all administrative commands are contained in the admin module, some have their own modules:

* [Ban Module](ban.html)
* [Jail Module](jail.html)
* [Kick Module](kick.html)

## Experience Manipulation

**The experience commands and listeners will be moved into an Experience module in Nucleus v2**

### Giving, setting and taking experience

The experience module has the `/exp` command, with the following subcommands:

* `/exp give`: give an amount of experience or levels.
* `/exp take`: removes an amount of experience or levels.
* `/exp set`: set~~~~s a player's experience.

These commands can give a specific amount of experience by providing a number, or an integer number of levels by prefxing of suffixing the number with "L" (i.e. L100 or 100L) for 100 levels. 

### Preserving experience across player deaths (Nucleus 1.14+)

The permission `nucleus.exp.keepondeath` will enable players to keep their experience level when they die and respawn.

* If the permission is `true`, XP will be kept across deaths.
* If the permission is **explicitly** `false`, XP will be reset to zero upon respawn.
* If the permission is **unset**, Nucl

## Configuration

### `/broadcast` customisation

The `/broadcast` message is prefixed and suffixed by the message templates defined at `broadcast-message-template.prefix` and `broadcast-message-template.suffix`. 
They work the same way as the chat module templates do, please see the [Chat Module](chat.html) documentation for more information on creating the templates.

`/plainbroadcast` does not use these prefixes/suffixes.

### `/gamemode` configuration

The setting `separate-gamemode-permissions` can be set to `true` to tell the `/gm` command requires an extra permission to change to the target gamemode - 
the permission is of the form `nucleus.gamemode.modes.<gamemode>`.

## Tokens in `/broadcast`s and `/plainbroadcast`s.

{% raw %}
Adding a token (such as `{{displayname}}` or `{{name}}` to the message will now show each player a personalised message - the tokens will be parsed based on each player rather than the sender. The sender's name is accessible through the `{{sender}}` token.
{% endraw %}

![Console and Player](https://i.gyazo.com/19b6bf177b7573fadb7714f0ae75c2c7.png)

This does not affect how the tokens for the prefix/suffix work - they will still be based on the sender.

For the list of tokens available for use by default, [please see this page](../configuration/links-and-tokens.html)