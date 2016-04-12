---
layout: standardheadmd
title: Documentation Centre
header: Arguments
---

<a href="index.html">&laquo; Return to Documentation Home Page</a>

## Introduction

This page lists all the specialist arguments that might appear in commands.

<a name="timespan"></a>

## Timespan Argument

The length parameter is in the format

```
[n]w[n]d[n]h[n]m[n]s
```

for `weeks`, `days`, `hours`, `minutes` and `seconds`, though not all parts are required. So:

* 1 day is `1d`
* 2 days 3 minutes is `2d3m`
* 4 hours 30 minutes and 20 seconds is `4h30m20s`

For example: if you want to ban `Notch` for 3 hours, 45 minutes, the command would be:

```
/tempban Notch 3h45m Banned by Nucleus
```