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

If you want to change the colour of a player's name in general, don't add a colour code to the end of the prefix. Instead,
<a href="#namecolours">use the `namecolor` permission option</a>, as this will tell Nucleus to use that colour all across the plugin.

## Group Templates

As of 0.6, different groups can have different chat templates to the default defined in `template`. To give a group a different template,
 simply add the name of the group and the template like so. Note that the name of the group is case sensitive, so the "Admin" group
 must have an entry for "Admin". Multiple entries can be added like so:

{% raw %}
```
    group-templates {
        Admin {
            prefix="{{prefix}} {{displayname}}&f A>: "
            suffix=" {{suffix}}"
        }
        Moderator {
            prefix="{{prefix}} {{displayname}}&f M>: "
            suffix=" {{suffix}}"
        }
    }
```
{% endraw %}

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

## Player Messages: URLs

Since 0.4, URLs are detected by Nucleus and are made clickable. This requires the `nucleus.chat.url` permission.

<a name="namecolours"></a>

## Default Name Colours

If you have a compatible permissions plugin installed, setting a player's (or their group's) `namecolor`/`namecolour` permission option will colour their
display name that colour be default. This can be overridden by players who can use colour codes in their nicknames.

This option accepts both names of colours and single character Minecraft colour codes - that is, `black` and `0` will both colour the player's name
in black.

## Default Chat Colours

If you have a compatible permissions plugin installed, setting a player's (or their group's) `chatcolor`/`chatcolour` permission option will colour their
chat that colour by default. This can be overridden by players who can use colour codes in their chat.

Like `namecolour`, this accepts both named colours and single character colour codes.