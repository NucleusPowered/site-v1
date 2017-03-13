---
layout: standardheadmd
title: '- FAQs'
header: Nucleus Frequently Asked Questions
---

<style>
h2 > a, h3 > a, h4 > a {
    color: black;
}
</style>

This page lists some of the more frequently asked questions about the Nucleus Project, specifically the Essentials like plugin that we publish for Sponge servers.

## Table of Contents

* TOC
{:toc}

<a class="anchor" id="about-nucleus"></a>

## [About the Nucleus Project](#about-nucleus)

<a class="anchor" id="what-is-nucleus"></a>

### [What is Nucleus?](#what-is-nucleus)
 
Nucleus is, quite simply, the Ultimate Essentials Plugin for Sponge! Nucleus was born to bring a modern, modular and feature-rich Essentials style plugin that
makes Sponge a viable choice for all server owners to cover the basics, whether they be vanilla servers or modded servers. It lets you get on
with making your server unique with a solid base you can trust! 

If you want more information on Sponge, see their [website](https://spongepowered.org) and [documentation](https://docs.spongepowered.org). 

<a class="anchor" id="who-is"></a>

### [Who is behind the Nucleus Project?](#who-is)

The Nucleus Project is lead by **dualspiral**. There is support from **HassanS6000**, the lead of EssentialCmds on the main Nucleus plugin, and
from Mohron, RysingDragon and TimeTheCat on Nucleus Phonon.

<a class="anchor" id="what-do-they-publish"></a>

### [What does the Nucleus Project publish?](#what-do-they-publish)

* Nucleus: the main plugin. Most functionality is located in this plugin.
* Nucleus Mixins: an optional plugin for Minecraft 1.10.2 servers that fixes `/invsee` and enables enhanced pre-generation of the world.
    * [See this page for more information on Nucleus Mixins.](configuration/mixins.html)
* Nucleus Gluon: an optional plugin for Nucleus 0.24.0 and above, and PlaceholderAPI 3.6 and above, that allows for chat placeholders from both
plugins to be used in... well, both plugins!
* Nucleus Phonon: a modular take on Discord bots

<a class="anchor" id="realtime-help"></a>

### [So, can I get help in realtime? You said Discord...](#realtime-help)

[You sure can get that help! Come visit us on Discord - click here and you'll be with us in no time!](https://discord.gg/MC2mAuS) 
But please, take the time to read the rest of this FAQ too. 

<a class="anchor" id="general-setup"></a>

## [Nucleus: General Setup](#general-setup)

<a class="anchor" id="esscmds"></a>

### [I've come from EssentialCmds, can I migrate my data?](#esscmds)

[Yes, please see our migration pages.](configuration/migration.html)

<a class="anchor" id="essentials"></a>

### [I've come from Essentials on Bukkit, can I migrate my data?](#essentials)

Not yet, but it's something we're looking into. But as you're coming from Bukkit, [you might be interested in our command equivalency table](essentials.html).

<a class="anchor" id="plugin-incompatibilities"></a>

### [Are there any known plugin incompatibilities with Nucleus?](#incompatibilities)

Unfortunately so. Here are some plugins that are known to clash with Nucleus:
 
* **Any Essentials like** plugin is likely to take over commands that Nucleus would normally use. Avoid running more than one Essentials plugin at a time.
* **ProjectWorlds** (PJW): PJW takes over the `/world` command, and has a different command setup to Nucleus. Nucleus can do most things that PJW does, 
but if you decide you wish to use PJW and want to get to the Nucleus world command, you can use `/nworld` instead.
* **ProjectPortals** (PJP): Older versions of PJP takes over the home, warp, back and teleportation commands. You can turn off these modules in PJP if 
you would rather use Nucleus' versions. Never versions of PJP have these modules disabled.
* **SimpleChat** and **SimpleTags**: These plugins have been known to hijack Nucleus' chat formatting - if you want chat channels, other plugins with Nucleus
integration exist.

As we find more, we'll update this list.

<a class="anchor" id="lots-of-permissions"></a>

### [There are a lot of permissions there, can I just give a permission wildcard?](#lots-of-permissions)

Yeah, 1000 permission nodes can be daunting, and there is nothing stopping you, but we honestly recommend you do not. 
If you do so, the following things will happen:

* You will not be able to go AFK (permission: `nucleus.afk.exempt.toggle`)
* Logging in/out of your server will never generate a connection message (permission: `nucleus.connectionmessages.disable`)

Other plugins may also not function as intended, a good example is **GriefPrevention**. **So, please, don't use the wildcard.**

Instead, Nucleus offers a way to setup our suggested permission sets, that should get you off the ground. [You can read more about it at this 
 documentation page](configuration/permissions.html), but the gist of it is that you should setup your user, mod and admin groups, then run the
 following command on each:
 
 `/nucleus setupperms [USER|MOD|ADMIN] <groupname>`

You can then tweak your permissions as you see fit. The permissions that get loaded with the `NONE` set are highly specialised, we do not
recommend you actually grant these unless you are SURE you know what you are doing.

<a class="anchor" id="what-defaults-give"></a>

### [What do your defaults give?](#what-defaults-give)
 
* `USER` gives permissions to:
  * Use `/afk`, allowing themselves to be marked as AFK
  * Use `/me`, to be able to write "action chat" (such as `dualspiral wrote these docs`) 
  * The ability to see the server time (using `/time`)
  * Create and warp to homes
  * View the MOTD
  * Ignore players in chat
  * Mail players
  * Use `/helpop` to message staff 
  * Message players
  * Use `/suicide`
  * Use `/realname` to find out what a player's IGN is from a nickname
  * Use `/list`
  * Use `/rules` 
  * Use the server shop (`/itembuy` and `/itemsell`)
  * Warp to `/spawn` and `/firstspawn`
  * Use `/tpa`, accept and deny requests, and use `/tptoggle` to blanket deny requests.
  * Use `/warp` to teleport to any available warp point (but if enabled, only to those they are given explicit permissions for).
  * Use `/getpos` to get their own position
* `MOD` gives permission to:
  * Administer bans (including tempbans)
  * Administer mutes
  * Send players to jail and then be able to unjail them again
  * Kick players, and kick all players when required
  * Join a full server
  * Are exempted from being ignored in chat and messages
  * Use Social Spy (to spy on messages)
  * Add notes and warnings to players
  * Use staff chat
  * Use `/tpahere` to request someone to teleport to _them_.
  * Use the teleport commands that do not require toggling
* `ADMIN` gives permission to:
  * Bypass a lot of restrictions
  * Use a lot of administrative commands

As the `ADMIN` set spans about 900 permission nodes, please forgive me for not listing it all here!

<a class="anchor" id="disable-modules"></a>

### [Can you disable some of Nucleus' functionality?](#disable-modules)

Yes! Nucleus has a system which wraps up the functions into units called "modules". So, if you have a better banning plugin, turn off the 
ban module! Something else does chat? Turn off the chat module!

The modularisation of Nucleus allows for exciting plugin combinations

To turn off a module, in `/config/nucleus/main.conf`, scroll to the `modules` section and set the module to `DISABLED`. Then restart your server.

<a class="anchor" id="use-minecraft-command"></a>

### [I don't want your command taking over this Minecraft command! Can you stop that?](#use-minecraft-command)

It's important to note that no minecraft command is actually turned off. To access a vanilla Minecraft command hidden by Nucleus, you can use `/minecraft:<command>`, such as
 `/minecraft:kill`.

If you would rather have Minecraft use the command, but keep Nucleus' available, use Sponge's command alias feature. 
In Sponge's `global.conf` file, find the `sponge.command.aliases` section, and add `<command>=minecraft` to the list. 

So, to set `/kill` to redirect to Minecraft, your aliases section should look like this:

```
aliases {
    kill=minecraft
}
```

Nucleus' `kill` is then available through `/nucleus:kill`
 
If you want to turn off Nucleus' command completely without turning off the whole module, you can turn it off in `commands.conf`.

<a class="anchor" id="use-bungeecord-commands"></a>

#### [I'm using a BungeeCord/Waterfall/Lillypad proxy, and this still doesn't work!](#use-bungeecord-commands)

A BungeeCord plugin is probably taking over the command. The only thing you can do in this case is disable the command on your proxy,
which might involve disabling the whole plugin.

In these scenarios, you can still use `/nucleus:command`, or if it has an alias, the alias.

<a class="anchor" id="customisation"></a>

## [Customisation](#customisation)

<a class="anchor" id="warmups-cooldowns-costs"></a>

### [I'd like some of my commands to have warmups, cooldowns or costs.](#warmups-cooldowns-costs)

Most of Nucleus' commands support warmups, cooldowns or costs. All the settings are in the `/config/nucleus/commands.conf` file, [see
our page on this for more information.](configuration/commands.html) 

<a class="anchor" id="connection-messages"></a>

### [Can we change/remove the join/leave messages?](#connection-messages)

Yes, you can. This is described in the [Connection Messages module documentation](modules/connection-messages.md).

<a class="anchor" id="prefix-suffix"></a>

### [How do I set standard chat prefixes/suffixes?](#prefix-suffix)

This is entirely dependent on your Permissions plugin. While Nucleus has a lot more to offer in terms of chat formatting, [and we
 recommend that you look at the chat module documentation pages](modules/chat.html), by default, Nucleus will display prefixes, display names and suffixes in the chat message. 
 Therefore, you just need the to set the prefix options in your prefix options, select commands for sample permission plugins are provided here.

_For a user_:
{% include permissionblock.html cmdtype="userPrefix,userOption" user="[group]" option="prefix" value="[prefix]" %}

_For a group_:
{% include permissionblock.html cmdtype="groupPrefix,groupOption" user="[group]" option="prefix" value="[prefix]" %}

<a class="anchor" id="home-count"></a>

### [How can I set the number of homes a player can have?](#home-count)

This is implemented as the permission option/meta `home-count`, rather than a specific permission for performance reasons.
Consult your permission plugin on how to set this option, but for reference, commands for popular permission managers are shown below:

<em>For users:</em>

{% include permissionblock.html cmdtype="userOption" user="[user]" option="home-count" value="[number]" %}

<em>For groups:</em>

{% include permissionblock.html cmdtype="groupOption" user="[user]" option="home-count" value="[number]" %}

[You can read more about the home module here.](modules/home.html)

<a class="anchor" id="troubleshooting"></a>

## [Troubleshooting problems in game](#troubleshooting)

<a class="anchor" id="invsee"></a>

### [I'm using `/invsee`, but the window keeps disappearing!](#invsee)

This probably means you're running Minecraft 1.10.2, and you're not using Nucleus Mixins as well. This is an optional (but
recommended) plugin that changes Minecraft's internals to allow you to use `/invsee` from further than 8 blocks away from your target. Minecraft 1.11.2
users don't need this plugin, a better fix is in Sponge API 6 for 1.11.2.

You can [find out more about Nucleus Mixins here](configuration/mixins.html), and [download Nucleus Mixins from Ore here.](https://ore.spongepowered.org/Nucleus/Nucleus-Mixins)

<a class="anchor" id="back-warp"></a>

### [Why is `/back` telling me there is nowhere to warp to?](#back-warp)

`/back` was designed to be more flexible than previous plugins, but that also means that configuring it can take a few more steps. If it
isn't working, make sure you check the following:

* The players have the required permissions: `nucleus.back.targets.death`, `nucleus.back.targets.portal`, `nucleus.back.targets.teleport`
* The options in `main.conf` at `back.*` are set as you expect them to be. 

<a class="anchor" id="first-spawn-problems"></a>

### [Why are players not spawning at the set spawn when they first log in?](#first-spawn-problems)

Minecraft has a special spawn logic for new players:

* The location they log in will always be on the surface, and always a grass block
* The location will be _around_ spawn, to provide a random-ish start point.
 
Nucleus can employ some tricks to force players to start at your spawn point if you use the
`spawn` module. Use the command `/setfirstspawn` at the location you want new players to spawn
at (which can be the same as the normal spawn point), and set `spawn.force-first-spawn` to `true`.
Then, use `/nucleus reload` if your server is running. Players will now spawn _exactly_ on the first
spawn point that you set.

<a class="anchor" id="chat-messed-up"></a>

### [My chat messages seem messed up, I set Nucleus' formatting options but it's not following them!](#chat-messed-up)
 
Have you got any chat management plugins installed? These plugins tend to override what Nucleus is doing, and while Nucleus tries to be
as compatible as possible, some plugins do interfere, from duplicating sections to completely blowing away all of Nucleus' formatting.

Before reporting this to the Nucleus issue tracker (see below), _please_ remove ANY chat management plugin and test without. SimpleChat
and UltimateChat, to name some of the more popular plugins, do alter the chat and can cause surprise to the server owners! While we can
try to give you help in these scenarios, please bear in mind that anyone in the Nucleus Discord channel are there for Nucleus. That said,
developers of some of these other plugins are also in our Discord channel and can help you directly too.

<a class="anchor" id="world-pregen"></a>

### [My server is _really_ slow when using `/rtp` or some other teleport to a place no player has gone before!](#world-pregen)

Chunk generation is slow. A general recommendation by most of the community is to do what is known as "pre-generation" of your world. Pre-generation creates 
chunks in your world before they are needed, so when someone _does_ reach that chunk, it just has to be loaded, rather than generated first.
This, in general, offers a moderate performance gain, however, do be careful to not pregenerate a large world!

Nucleus offers a way to do this in the `world` module. If you're running a 1.10.2 server, we recommend installing the 
[Nucleus Mixins](configuration/mixins.html) plugin before attempting this, as this can provide moderate speedup of pre-generation.

The command `/world border gen [-a] [--save <time>] [world]` allows you to pre generate
up to your world border. We recommend setting your world border to be about a 4000 block diameter around your spawn point (using the command
`/world border set 4000` when stood at the centre), and then running `/world border gen`. This will generate your world, using 80% of the tick
time and save every 20 seconds.

If you want to try to run the pre-generation faster, you can change the same interval to be much higher, and run in "aggressive" mode. Adding
`-a` to the command indicates aggresive mode, where 90% of tick time is dedicated to the generation routines, and memory checks are turned off.
To increase the save interval, add `--save <time>` to your command, many server owners choose save intervals of two minutes.
 
Some configurations are:

* `/world border gen -a --save 1m` - aggressive mode, 1 minute save intervals.
* `/world border gen -a --save 5m` - aggressive mode, 5 minute save intervals.
* `/world border gen --save 2m` - normal mode, 2 minute save intervals, usually used for live servers (which we do not recommend).

**We recommend you do this on a server with no players on!**

<a class="anchor" id="command-error"></a>

### [HELP! I have an error when I run a command! (AKA, making a good bug report!)](#command-error)

If you get an error that states "An error occurred while running this command", or Nucleus does something weird when you perform an action, 
please do the following (make sure you have console and filesystem access):

* Before you do all this, [you can join the Nucleus Discord channel](https://discord.gg/MC2mAuS) and ask if anyone else has seen the problem.
* Make sure you are running the **latest** version of Nucleus. If you are not, try again with the latest.
* Turn on Debug Mode: in `main.conf`, set `core.debug-mode` to `true` and run `/nucleus reload`.
* [Load up the Nucleus issue tracker](http://github.com/NucleusPowered/Nucleus/issues), and search the issues to make sure
the issue hasn't been reported already. 
    * If it has, you can still add extra information if you think you have new things to say, but please do not add comments that simply say "me too".
* Run the command that caused the error again, it should show a "stack trace" in the console.
* Copy this error down somewhere, like Notepad, to make sure you don't lose it before providing it to us.
    * You can now turn _off_ debug mode if you wish. 
* Run `/nucleus info` on your server, and get the file it generates.
* Pastebin/Github Gist _both_ files, and create a new issue on GitHub explaining what you did to cause the error.

That's it! The developers may ask for more information, they will direct you on how to get this info if it's needed.

<a class="anchor" id="devs"></a>

## [Developers](#devs)

<a class="anchor" id="can-i-integrate"></a>

### [Can I integrate with Nucleus?](#can-i-integrate)

Absolutely, we'd love to have you on board. [We have JavaDocs for our API](http://jd.nucleuspowered.org/), but if the API you want doesn't 
exist, or you want help with the integration, the developers are frequently on Discord.
 
<a class="anchor" id="maven"></a>
 
### [Do you have a Maven/Gradle repo?](#maven)

We certainly do! This information is posted on all feature release notes where the API will have changed.

The repo is available at `http://repo.drnaylor.co.uk/artifactory/minecraft/`, you want the `nucleus-api` artifact, which contains the API
interfaces we will keep stable.

[You can also use JitPack](https://jitpack.io/#NucleusPowered/Nucleus) as your repo too, be sure to select the `nucleus-api` artifact.


<!-- 
- Where Is This Stored chart - eg, where to find the data manipulated by Nucleus. Always helpful when corruption, or when you need to retrieve information that was wiped and needs backup-restoring.
- As documentation grows, it would be neat to have config templates for troublesome sections (blacklist, list, chat module, etc)
-->