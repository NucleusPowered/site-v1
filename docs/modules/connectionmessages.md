---
layout: modulespec
title: Documentation Centre
header: Connection Messages Module
moduleid: connection-messages
modulename: Connection Messages
---

## Introduction

The Connection Messages module handles changing the messages sent to clients when players join and leave the server.

Like the [Chat module](chat.html), Connection Messages work best when coupled with a permission plugin that supports options.

## Configuration

In the `main.conf` file, `connection-messages` section, the following options are available:

* `modify-login-message`: if `true`, the standard login message sent to server chat will be replaced with the contents of `login-message`
* `modify-logout-message`: if `true`, the standard logout/disconnect message sent to server chat will be replaced with the contents of `logout-message`
* `show-first-login-message`: if `true`, an extra message will be sent to chat when a player joins the server for the first time.
This message is defined in `first-login-message`.

The messages support the tokens available to the [Chat module](chat.html).

{% raw %}
* `{{name}}`: The player's name
* `{{displayname}}`: The player's set display name. Usually, this is the users nickname if they have one, or their in-game name otherwise.
* `{{prefix}}`: The player's prefix tag, if one is set in the permission plugin.
* `{{suffix}}`: The player's suffix tag, if one is set in the permission plugin.
{%  endraw %}

The messages also support Minecraft <a href="http://minecraft.gamepedia.com/Formatting_codes#Color_codes" target="_blank">colour codes</a>,
replacing `§` with `&`.