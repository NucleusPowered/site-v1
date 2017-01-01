---
layout: modulespec
title: Documentation Centre
header: Message Module
moduleid: message
modulename: Message
---

## Introduction

The Message module allows players to send private messages to each other. These messages can be read by staff members with "social spy" permissions.
 
## Social Spy

By default, those with "social spy" can see every message that players send. This can be turned on by players with the permission `nucleus.socialspy.base` 
using the command `/socialspy`.

### Forcing Social Spy on players

If you want to _force_ someone to have Social Spy, give them the permissions `nucleus.socialspy.base` AND `nucleus.socialspy.force`.

### Social Spy Levels

However, for server owners who want more control, Nucleus offers a
finer grained control mechanism, social spy levels.

To enable social spy levels, in `main.conf`, set `message.socialspy.use-levels` to `true`, and use `/nucleus reload`. Ensure you are using a permissions
plugin that supports options.

To set a player's social spy level, set the option `nucleus.socialspy.level` to an integer. By default, a player's level is zero.

<em>For users:</em>

{% include permissionblock.html cmdtype="userOption" user="[user]" option="nucleus.socialspy.level" value="[number]" %}

<em>For groups:</em>

{% include permissionblock.html cmdtype="groupOption" user="[user]" option="nucleus.socialspy.level" value="[number]" %}

Players with social spy can then see the messages of those with levels _below_ theirs. 
If `message.socialspy.same-levels-can-see-each-other` is set to `true`, then social spies can see messages of those at their own level too.