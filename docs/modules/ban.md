---
layout: modulespec
title: Documentation Centre
header: Ban Module
moduleid: ban
modulename: Ban
---

## Introduction

The Ban module allows for server staff to impose and pardon bans on players. The ban module can ban players temporarily
or permanently. Any bans that are placed are put into the Minecraft ban system, so will remain if the module is disabled
or Nucleus is removed.

## Banning Temporarily

The syntax for the `/tempban` is

```
/tempban <player> <time> [reason]
```

The time parameter is of the [Timespan Argument](../arguments.html#timespan) format. For example: if you want to ban `Notch` for 3 hours, 45 minutes, the command would be:

```
/tempban Notch 3h45m Banned by Nucleus
```

## A Note on Reasons

All reasons support Minecraft Colour codes, prefixed by an `&`. So, for example, to make a message show up in light
red, prefix it with a `&c`.