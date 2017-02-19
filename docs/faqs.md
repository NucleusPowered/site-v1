---
layout: standardheadmd
title: '- FAQs'
header: Nucleus Frequently Asked Questions
---

## About the Nucleus Project

### What is Nucleus?
 
Nucleus is, quite simply, the Ultimate Essentials Plugin for Sponge! Nucleus was born to bring a modern, modular and feature-rich Essentials style plugin that
makes Sponge a viable choice for all server owners to cover the basics, whether they be vanilla servers or modded servers, and let you get on
with making your server unique, and other plugin developers develop those unique plugins that the Sponge API makes possible. 

### Who is behind the Nucleus Project?

The Nucleus Project is lead by `dualspiral`, and he has some support from `HassanS6000`, the lead of EssentialCmds.

### So, can I get help in realtime? You said Discord...

[You sure can get that help! Come visit us on Discord - click here and you'll be with us in no time!](https://discord.gg/MC2mAuS) 
But please, take the time to read the rest of this FAQ too. 

## Initial Setup of the Plugin

### I've come from EssentialCmds, can I migrate my data?

[Yes, please see our migration pages.](configuration/migration.html)

### There are a lot of permissions there, can I just give a permission wildcard?

Yeah, 1000 permission nodes can be daunting, and there is nothing stopping you, but we honestly recommend you do not. 
If you do so, the following things will happen:

* You will not be able to go AFK (permission: `nucleus.afk.exempt.toggle`)
* Logging in/out of your server will never generate a connection message (permission: `nucleus.connectionmessages.disable`)

Other plugins may also not function as intended, a good example is `GriefPrevention`. **So, please, don't use the wildcard.**

Instead, Nucleus offers a way to setup our suggested permission sets, that should get you off the ground. [You can read more about it at this 
 documentation page](configuration/permissions.html), but the gist of it is that you should setup your user, mod and admin groups, then run the
 following command on each:
 
 `/nucleus setupperms [USER|MOD|ADMIN] <groupname>`

You can then tweak your permissions as you see fit. The permissions that get loaded with the `NONE` set are highly specialised, we do not
recommend you actually grant these unless you are SURE you know what you are doing.

### What do your defaults give?
 
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
* `MOD` gives permission to:
  * Administer bans (including tempbans)
  * Administer mutes
  * Send players to jail and then be able to unjail them again
  * Kick players, and kick all players when required
  * Join a full server
  * Are exmepted from being ignored in chat and messages
  * Use Social Spy (to spy on messages)
  * Add notes and warnings to players
  * Use staff chat
  * Use `/tpahere` to request someone to teleport to _them_.
  * Use the teleport commands that do not require toggling
* `ADMIN` gives permission to:
  * Bypass a lot of restrictions
  * Use a lot of administrative commands

As the `ADMIN` set spans about 900 permission nodes, please forgive me for not listing it all here!

### Can you disable some of Nucleus' functionality?

Yes! Nucleus has a system which wraps up the functions into units called "modules". So, if you have a better banning plugin, turn off the 
ban module! Something else does chat? Turn off the chat module!

The modularisation of Nucleus allows for exciting plugin combinations

To turn off a module, in `/config/nucleus/main.conf`, scroll to the `modules` section and set the module to `DISABLED`. Then restart your server.

### Are there any known plugin incompatibilities with Nucleus?

Unfortunately so. Here are some plugins that are known to clash with Nucleus:
 
* ProjectWorlds (PJW): PJW takes over the `/world` command, and has a different command setup to Nucleus. Nucleus can do most things that PJW does, 
but if you decide you wish to use PJW and want to get to the Nucleus world command, you can use `/nworld` instead.
* ProjectPortals (PJP): Older versions of PJP takes over the home, warp, back and teleportation commands. You can turn off these modules in PJP if 
you would rather use Nucleus' versions. Never versions of PJP have these modules disabled. 

### I'd like some of my commands to have warmups, cooldowns or costs.

Most of Nucleus' commands support warmups, cooldowns or costs. All the settings are in the `/config/nucleus/commands.conf` file, [see
our page on this for more information.](configuration/commands.html) 

### I don't want your command taking over this Minecraft command! Can you stop that?

It's important to note that no minecraft command is actually turned off. To access a vanilla Minecraft command hidden by Nucleus, you can use `/minecraft:<command>`, such as
 `/minecraft:kill`.

If you would rather have Minecraft use the command, but keep Nucleus' available, use Sponge's command alias feature. 
In Sponge's `global.conf` file, find the `sponge.command.aliases` section, and add `<command>=minecraft` to the list. 

So, to set `/kill` to redirect to 

```
aliases {
    kill=minecraft
}
```

Nucleus' `kill` is then available through `/nucleus:kill`
 
If you want to turn off Nucleus' command completely without turning off the whole module, you can turn it off in `commands.conf`.

## Problems In Game

### Why is `/back` telling me there is nowhere to warp to?

`/back` was designed to be more flexible than previous plugins, but that also means that configuring it can take a few more steps. If it
isn't working, make sure you check the following:

* The players have the required permissions: `nucleus.back.targets.death`, `nucleus.back.targets.portal`, `nucleus.back.targets.teleport`
* The options in `main.conf` at `back.*` are set as you expect them to be. 

### Why are players not spawning at the set spawn?

### Can we change/remove the join/leave messages?

## Troubleshooting

### HELP! I have an error when I run a command!

* Turn on debug mode
* Get the stack trace
* GitHub issue or Discord

<!--
1. why is /back not working (because they forgot the 2 other permission nodes)
2. how to set a prefix/suffix 
3. can we change the join/leave message
4. why are players not spawning on the set spawn?

- Anything that has to do with world creation/import/pregeneration always gets asked. Not only as to how to use flags and manipulate the data, but also why they should pregenerate. 
- Module disabling/enabling. If we stress that most (if not all) in Nucleus is optional, I think it would open up many possibilities in terms of plugin combination.
- Refering to the previous point, known incompatibilities (PJW and world module), or commands like /home, /back, /kill, etc. 
- Where Is This Stored chart - eg, where to find the data manipulated by Nucleus. Always helpful when corruption, or when you need to retrieve information that was wiped and needs backup-restoring.
- As documentation grows, it would be neat to have config templates for troublesome sections (blacklist, list, chat module, etc)
-->