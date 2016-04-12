---
layout: modulespec
title: Documentation Centre
header: Chat Module
moduleid: chat
modulename: Chat
---

## Introduction

The Chat Module handles changing how chat looks when players send public messages. Whilst there are no commands involved,
the chat module is perhaps the module that is most visible on the server.

Chat works best when coupled with a permission plugin that supports options.

## Configuration

In the `main.conf` file, `chat` section, the following options are available:

* `modifychat`: if `true`, the chat format will be modified.
* `template.prefix`: The prefix to all messages sent, if set. Set to empty to disable.
* `template.suffix`: The suffix to all message sent, if set. Set to empty to disable.

If `modifychat` is set to `true`, when someone sends a public chat message, the message will start with whatever is
specified in `template.prefix`, and will be followed by whatever is specified in `template.suffix`.

The templates support various tokens.

{% raw %}
* `{{name}}`: The player's name
* `{{displayname}}`: The player's set display name. Usually, this is the users nickname if they have one, or their in-game name otherwise.
* `{{prefix}}`: The player's prefix tag, if one is set in the permission plugin. This is NOT the same as the template prefix, defined above.
* `{{suffix}}`: The player's suffix tag, if one is set in the permission plugin. This is NOT the same as the template suffix, defined above.
{%  endraw %}

The templates also support Minecraft <a href="http://minecraft.gamepedia.com/Formatting_codes#Color_codes" target="_blank">colour codes</a>,
replacing `§` with `&`.

## Player Prefixes and Suffixes

To set a player's or group's prefix or suffix tag, a permissions plugin that supports options must be installed, such as
PermissionsEx. To set the prefix tag, simply set the desired tag to the `prefix` option, similarly, with the suffix tag,
set the `suffix` option. Both these tags support colour codes, as above.

For example, to set the the prefix <span style="color: #AA00AA;">[Mod]</span> for the "mod" group in PermissionsEx, run the command

```
/pex group mod option prefix &5[Mod]
```

## Player Messages: Colours, Formats and Magic

Messages themselves can also be formatted using colour codes and formats, prefixing the codes with `&` characters.
"Magic" characters can also be sent using `&k`, and reset using `&r`.

The message formatting can be controlled by permissions - which are listed below.