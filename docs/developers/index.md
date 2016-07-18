---
layout: standardheadmd
title: Nucleus Developers
header: Developing Nucleus
---

Nucleus is a complex plugin that has been designed to be based on a module system, to allow users and plugins to turn off functionality
that they don't want, and to enable universal charging, cooldowns and warmups. While the underlying code that hooks all of Nucleus together
may seem scary, for most developers that want to add a feature into Nucleus will not need to see the internals, and will need to focus
on the development of the core feature they want to write.

## General Information

* How is Nucleus put together?
* The QuickStart Module Loader

## The Basics

In this section, we consider how we can add commands, listeners and tasks to a module, as well as add persistent data
on a player, world or server level.

### Commands, Listeners and Tasks

* Commands
* Event Listeners
* Repeatable Tasks
* Injectable Objects

### Retrieving and Storing Data

* Getting User, World and General Data
* Adding User, World and General Data
* Getting Configuration Values

## Modules and Configuration

In this section, we inspect how modules are created, and how configuration sections are associated with these modules.

### Modules

* Creating a Simple Module
* Creating a Module that contains a configuration section
* Adding Handlers

### Configuration

* Creating a Configuration Section