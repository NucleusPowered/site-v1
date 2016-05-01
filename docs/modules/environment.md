---
layout: modulespec
title: Documentation Centre
header: Environment Module
moduleid: environment
modulename: Environment
---

## Introduction

The Environment module allows for the manipulation of natrual forces in the world, specifically the time and the weather.

## Manipulating the Weather

Nucleus has two commands for manipulating the weather, changing it, and locking it.

### Changing the weather

The command `/weather [world] <weather> [duration]` changes the current climate for the specified time. If no world is
specified, the current world is used.

The weather may be one of:

* `sun`, `clear`, `c` for clear weather
* `rain`, `r` for rain/snow
* `storm`, `thunder`, `t` for a thunderstorm (as well as rain/snow)

The duration may be a number, which will be taken to be in seconds, or of the form of a [timespan](../arguments.html#timespan)

### Locking the weather

The command `/lockweather [world] [true/false]` locks or unlocks the weather to the current climate on the specified (or current) world.

## Changing Time

The world time can be seen by simply running the command `/time [world]`. If the world is not specified, the current world
time is displayed.

### Setting Time

The world time can be set through the use of the command `/time set [world] <time>`. The time can be in one of the following formats:

* Ticks - there are 24000 ticks per day, where 0 ticks is 6am/0600, and 1000 ticks represents an hour.
* `[0-23]h`, for 24 hour time (e.g. 12h for midday).
* `[1-12][am|pm]`, for 12 hour time (e.g. 12pm for midday).

It can also be a predefined keyword:

 * `morning`, `dawn`, `sunrise`: 0 ticks (6 am)
 * `day`, `daytime`: 1000 ticks (7 am)
 * `noon`, `afternoon`: 6000 ticks (12 pm)
 * `dusk`, `evening`, `sunset`: 12000 ticks (6 pm)
 * `night`: 14000 ticks (8 pm)
 * `midnight`: 18000 ticks (12 am)
