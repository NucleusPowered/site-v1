---
layout: posts
title: "Nucleus v2 - Roadmap"
date: 2019-09-05
---

I have been asked a few time about Nucleus v2, what it is and what it will be. I'm writing this post to try to explain
what v2 is, how it affects server owners, plugin developers, and potential contributors. But first, a little history
lesson.

## A Brief History of Nucleus

While I'd been around the Sponge community for a while, Nucleus wasn't started until January 2016. At the time, I was 
helping another server out and plugins and the transition to Sponge was a little painful. We were moving our modded 
network from 1.7.10 to what was 1.8 at the time, and we we searching for plugins to replace what we needed. We had
PermissionsEx, TotalEconomy and a custom ban plugin (if you're interested, 
[look at Hammer on my github page](https://github.com/dualspiral/Hammer)). We looked at the various plugins on offer
to replace Essentials and... well, I wasn't impressed. At the time, there were the following options:

* EssentialCmds
* Core (later to become Nexus)
* Bedrock

Out of the three, Bedrock was perhaps the most performant but didn't have the feature set we were looking for, 
EssentialsCmds was clunky and slow, and Core was in a similar boat. We tried running them all on the server and
none of them fit our needs.

As a result, I was bored at my parents' house one day and hence, Nucleus was born. The idea behind it was to make it
a modular plugin that didn't completely replicate the Essentials feature set, but attempt to redfine what a base
plugin on a server is.

Suffice to say, I've succeeded. It is thanks to the encouragement of the community, the contributions from contributors,
almost everyone in the community has made this worthwhile.

## Nucleus v0 & v1

Nucleus has now been three and a half years in the making. It has gone through a few iterations, but largely in the same
form for a while now. The idea was to automate as much as possible, permissions defined by convention rather than 
explicitly created, subcommand definition, service based structure.

Most of this has succeeded, but there are some severe deficiencies in the structure. While the idea was to enable 
multiple storage backends, I wrote myself into a hole, and flat file was all that was possible. The translation system 
was designed to be a lot better, with the possibility of per client translations based on the locale they send. The
user data was intended to be modular - which it was, but a lot more confusing than it should be. Command annotations
were designed in a very adhoc manner, and adding support for them in the base code became very hacky.

Some of these conventions have also ended up with making Nucleus very hard to contribute to correctly for everyone but
me. Command descriptions were done by convention, but there was no obvious way for contributors to know that. Messages
could be gotten multiple ways. The traits just made classes messy. The `Nucleus` god object was a terrible mistake,
it make my main plugin class a huge maintainence burden and made it easy for third parties to (mis-)use Nucleus. Such
plugins fail when I change something in the back end - though they should never have been using that code in the
first place.

Something had to change.
 
## Nucleus v2
 
Nucleus v2 is intended to fix some of the problems of v1, as well as change some of the features of the plugin. The
plugin will mostly be development focused but will contain some features for plugin developers that use Nucleus and
server owners.

Note the following is not exhaustive. Right now, I'm working on the stuff that will support future contributions, then
API changes. Note v2 may not contain many user facing changes, but will make it easier for plugins and contributors
to make your servers a lot more unique!

For a little run down of what I have so far, I've created a few lists. Of course, none of this works yet, Nucleus 2
does not compile! However, it is what I _think_ will work. 
[If you want to look at the code, see this branch on Github.](https://github.com/NucleusPowered/Nucleus/tree/v2/S7-cmd)

### Server Owners

* The server shop module will be removed.
* Multiple storage systems will be supported (e.g. database) - subject to plugins being written to support this.
* Translated messages will be supported on a per client basis. 
* Minor changes to try to improve the quality of life of users of the plugin.

### API consumers

* Deprecated API methods will be removed
* A storage API will be added to support redirecting saving/loading of user data to other storage mediums.
  * Note that consumers will receive JSON objects and no schema will be provided, due to the fact the Nucleus data sets
    change.
* There will be further changes that will be communicated later.

### Contributors

* The Nucleus god object will be removed, in favour of injections using Guice.
* The module loading system has been revamped.
* Commands are completely revamped.
* Everything will now be explicit - command description translation keys will be specified in the command annotation,
for example.
* Permissions will be hard coded.
* Teleportation will be more robust, using the Sponge teleport helpers rather than Nucleus' own routines.
* The main object will be the `INucleusServiceCollection` that is injected where necessary 

## To the Future

Nucleus 1.14.x is still supported but will receive minimal changes while I get v2 ready. There may also be an overlap in 
support between 1.14.x and 2.x.y while plugins update to support the new API. Once v2 is stable enough, v1 support will
be dropped.

I'll provide further updates when warranted. I hope to get this finished somewhat quickly, though my life is busy and so 
I can't spend all my time on it, unfortunately.

Thanks for sticking with us!