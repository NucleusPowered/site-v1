---
layout: modulespec
title: Documentation Centre
header: Fly Module
moduleid: fly
modulename: Fly
---

## Introduction

The Fly Module allows players to fly on the server, as if they were in Creative mode. It also contains some compatibility options.

## Configuration

There are a few configuration options:

* `save-all-flystate-on-quit`, if `true`, a player's flystate will be persisted across logins, no matter how fly was granted.
* `require-fly-permission-on-login`, if `true`, a player must have the permission `nucleus.fly.base` on login to be able to continue flying.
* `find-safe-location-on-login`, if `true` and a player does not have permission to keep their fly state across logins, 
Nucleus will try to find a safe location to warp them to when they next log in.

