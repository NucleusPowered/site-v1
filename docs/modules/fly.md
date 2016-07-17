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

Only Broadcasts currently has configuration, to customise how the broadcast is displayed. The message is prefixed and suffixed by the
message templates defined at `broadcast-message-template.prefix` and `broadcast-message-template.suffix`. They work the same way as
the chat module templates do, please see the [Chat Module](chat.html) documentation for more information on creating the templates.