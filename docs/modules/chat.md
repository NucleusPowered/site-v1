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
specified in `template.default.prefix`, and will be followed by whatever is specified in `template.default.suffix`.

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

Different groups can have different chat templates to the default defined in `template.default`. To give a group a different template,
 simply add the name of the group and the template like so. Note that the name of the group is case sensitive, so the "Admin" group
 must have an entry for "Admin". Multiple entries can be added like so:

{% raw %}
```
templates {
    ...
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
}
```
{% endraw %}

## Player Prefixes and Suffixes

To set a player's or group's prefix or suffix tag, a permissions plugin that supports options must be installed, such as
PermissionsEx. To set the prefix tag, simply set the desired tag to the `prefix` option, similarly, with the suffix tag,
set the `suffix` option. Both these tags support colour codes, as above.

For example, to set the the prefix <span style="color: #AA00AA;">[Mod]</span> for the "mod" group, run the command (based on your permissions plugin):

{% include permissionblock.html cmdtype="groupPrefix,groupOption" user="mod" option="prefix" value="&5[Mod]" %}

## Custom Prefixes

Nucleus, as of 0.9, supports custom tokens other than "prefix" and "suffix". In the chat formatting string, you can add the following
tags:

{% raw %}
* `{{o:[option-name]}}` - replaced by the text in option "rank", if any.
* `{{o:[option-name]:s}}` - replaced by the text in option "rank", if any. If there _is_ text in the option, adds a space afterwards. 
{% endraw %}

In both cases, the option name is whatever you called the option. So, if you wanted a token called `rank` on a moderator with the
 string `[Rank]` before the prefix, you would run the following command (again, this varies based on your permissions plugin):

{% include permissionblock.html cmdtype="groupOption" user="mod" option="rank" value="[Rank]" %}

then have the following template:

{% raw %}
```
"{{o:rank:s}}{{prefix}} {{displayname}}&f>: "
```
{% endraw %}

If you also had a default group with the tag "[Default]", this would display "[Rank] <span style="color: #AA00AA;">[Mod]</span> name&gt; chat"
 for moderators, and "[Default] name&gt; chat" for default players.

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

As an example, if you wanted the default name colour for a player in the "mod" group to be aqua, you could run the following command (varying based on 
your permission plugin):

{% include permissionblock.html cmdtype="groupOption" user="mod" option="namecolour" value="b" %}


## Default Chat Colours

If you have a compatible permissions plugin installed, setting a player's (or their group's) `chatcolor`/`chatcolour` permission option will colour their
chat that colour by default. This can be overridden by players who can use colour codes in their chat.

Like `namecolour`, this accepts both named colours and single character colour codes.

As an example, if you wanted the default chat colour for a player in the "mod" group to be aqua, you could run the following command (varying based on 
your permission plugin):

{% include permissionblock.html cmdtype="groupOption" user="mod" option="chatcolour" value="b" %}

## Default Chat Styles (from 0.11)

If you have a compatible permissions plugin installed, setting a player's (or their group's) `chatstyle` permission option 
will set the style of their chat automatically. This can be overridden by players who can use colour codes in their chat.

`chatstyle` can accept multiple styles which are comma separated, and both single character and named styles are accepted.
To set the style as bold and italic, set the `chatstyle` option to `l,o` or `bold,italic`. 