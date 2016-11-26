---
layout: modulespec
title: Documentation Centre
header: Back Module
moduleid: back
modulename: Back
---

## Introduction

The Back module allows players to return to the location that they either last warped from, or last died at.

`/back` only remembers the last place they warped from or died at, any earlier locations are discarded. Locations are
also discarded on server restart, and offline user's information can be discarded at any time, subject to memory requirements
of the server.

## Configuration

There are two entries in the `main.conf` file in the `back` section:

* `on-teleport`: if `true`, allow players to return to the last location they teleported or warped _from_, if they have
permission to do so.
* `on-death`: if `true`, allow players to return to the place they died, if they have permission to do so.
* `on-portal`: if `true`, allow players to return to the place they last portal they travelled into, if they have permission to do so.