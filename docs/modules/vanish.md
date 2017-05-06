---
layout: modulespec
title: Documentation Centre
header: Vanish Module
moduleid: vanish
modulename: Vanish
---

## Introduction

The Vanish module allows players to turn themselves invisible to other entities on the server. This is a good way to hide yourself while doing work on your server in peace when other players are on your server. 

## Configuration

Don't be deceived when looking at the configuration options in your `main.conf`file. While only a couple options reside in the vanish section of your configuration file, other modules have options for `/vanish`. These modules are:

* [AFK Module](afk.html)
* [Server-List Module](serverlist.html)

The one configuration you can adjust currently is to hide your connection and disconnection messages while in vanish. Set this to true to have your vanished players not show a disconnection message. This will also hide the login message as long as you have the vanish.persist assigned to said player or group. 

## Vanish Status on Logout

While Nucleus doesn't have a way to forcibly log players in as vanished while joining, it does remember what your vanish status was when you logged out. To enable this function you need to assign the `nucleus.vanish.persist` permission to the user or group.  

