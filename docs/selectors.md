---
layout: standardheadmd
title: Documentation Centre
header: Selectors
---

<a href="index.html">&laquo; Return to Documentation Home Page</a>

## Introduction

This page lists all the specialist selectors that can be used in select commands. The use of selectors require the correct permission,
which is of the form `nucleus.<command name>.selectors`.

<a name="nearby"></a>

## Nearby Player Selector (@p)

When the `@p` selector is used in place of a player name on select commands (such as `/tppos` or `/msg`), the nearest player to the
  command executor's location (but not the executor itself) will be selected in place of the `@p` token. This selector cannot be used
  from the console.

Nucleus also provides an argument based version, `@p[world,x,y,z]`, where the location of the executor can be simulated. 
`world` is the name of the world, and `x`,`y` and `z` are world co-ordinates. There are no spaces in the selector, and this **can** affect
 the current player

<a name="random"></a>

## Random Player Selector (@r)

When the `@r` selector is used in place of a player name on select commands, a random player (but not the command executor) will be chosen.

Nucleus also provides an argument based version, `@r[world]`, where `world` is the name of the world. This restricts selecting the random player
from the specified world.
 
## All Players Selector (@a)

When the `@a` selector is used in place of a player name on select commands (currently only `/lightning`), all players will be chosen.

Nucleus also provides an argument based version, `@a[world]`, where `world` is the name of the world. This selects all players from the
named world
