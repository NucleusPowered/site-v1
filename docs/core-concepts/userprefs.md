---
layout: standardheadmd
title: Documentation Centre
header: User Preference Service
---

Nucleus 1.9 introduced the concept of the **user preference service**. There is some confusion
about this feature - this page aims to explain what it is, how it is similar to what what in place
previously, and why it cannot be disabled.

## What the User Preference Service is

The User Preference Service (UPS) is not really that new. When Nucleus 1.9 is installed, in storage,
some user settings are moved into a centralised location (per player), but nothing is otherwise changed.
These settings are common toggles that users might set - such as `/tptoggle` or `/socialspy`, which only
really make sense to the user toggling and (in general) would not be set by admins. These
toggles, while they still exist, are antiquated and are holdovers from Essentials on Bukkit and are a
disjointed solution. The UPS therefore brings all of the preference code together, and exposes a common
and simple API that plugins can use (if they wish) to get and set preferences.

As of Nucleus 1.9.1, the following actions are considered user preferences:

* Command Spy toggle
* Social Spy toggle
* Teleport toggle
* Private Message Receiving Enabled
* Powertool toggle
* Vanish on Login toggle

Things like `fly` and `vanish` are not considered user prefs as they can be placed on a user without
permission.

Note that there was a bug in 1.9.0 that caused `/tptoggle` to default to `false`, rather than `true`, this
was fixed in `1.9.1`.  

## Putting simpler control at the hands of players

One benefit of the UPS is that a new command, `/userprefs`, now allow users to see their preferences dashboard
and see what they have enabled with one command, without having to toggle something on and off. The old commands
are still there. They can view and set any preference using this system and the plan is to improve the GUI over
time.

Users will only see preferences that they have permissions to see.

## Providing simpler tools for admin inspection

The UPS also allows admins to view a user's preferences, which can be handy to troubleshoot problems such as
players not being targeted on login or not receiving messages. Admins can also set preferences to assist users.

## Can I turn the UPS off?

In a word, no. You can disable access to the `userprefs` command, but the system itself is baked into Nucleus.
However, the UPS is a core function of Nucleus and it cannot be turned off by itself.