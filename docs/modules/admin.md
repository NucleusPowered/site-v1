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