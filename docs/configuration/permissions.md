---
layout: standardheadmd
title: Documentation Centre
header: Using Permissions with Nucleus 
---

## Introduction

Nucleus, as an Essentials like plugin for Sponge, contains a lot of commands and as a result,
a lot of permissions that can seem daunting on the first run of a server. To help you get up
and running quickly, Nucleus provides two ways to set up permissions using your favourite 
permissions plugin.

If you want to set all permissions yourself, you can find a comprehensive list on our
[commands](../commands2.html) and [permissions](../permissions.html) pages. You can also
look on our specific module pages, or use any verbose logging tool that your permissions plugin
may provide.

## Nucleus is not a permissions management plugin

**Nucleus is not a permissions plugin in its own right.** While it provides commands to interact
with permissions plugins, Nucleus does manage permissions by itself. If no permissions plugin is
installed, Nucleus will fall back to the Sponge default of OP based permissions. Players will 
either have all commands (if opped) or no commands (if not opped). We strongly recommend that you
use a permissions plugin.

## Avoid using the wildcard `*` if possible

While the `*` permission is a temooting prospect, it does not work the same way as it did on Bukkit
and Essentials. It will grant you everything, even things you may not be expecting, unlike on these
legacy platforms. For example:

* Owners want vanish on login as a permission, like Essentials, but complain that `*` makes them vanish on login
* There is an AFK exemption permission, `nucleus.afk.exempt.toggle`, activated by `*` 
* `nucleus.connectionmessages.disable` - give yourself * and you won't be broadcasted to the server

[For more information on why `*` is a bad idea, click here.](../nowildcard.html)

## Nucleus Permissions Quick Start

Every permission in Nucleus is internally assigned one of five roles, from the user role, permissions
that are typically given to all players, through to staff roles all the way up to a role that contains
permissions that are specialised and may do something that you may not expect if you granted the wildcard.
These roles are:

* `USER` - permissions that servers will generally grant to all players
* `MOD` - permissions for actions that are used by moderation staff for server order
* `ADMIN` - permissions that allow setting gameplay altering mechanics or server management
* `OWNER` - permissions that can cause severe server damage and generally should only be used by those with ultimate authority
* `NONE`  - permissions that are highly specialised, such as vanish on login, that should be decided on a case by case basis

Nucleus provides two ways to set up our suggested permission sets based on these roles in conjunction with your permissions plugin.

### `/nucleus setupperms`

The `/nucleus setupperms` subcommand allows server owners to grant the suggested permissions to groups, allowing for a quick
setup of a server. This will grant permissions based on the version of the plugin you are running at the time and does not 
automatically update permissions when Nucleus is upgraded.

In general, you will already have the permission groups created in your permission plugin. To add the suggested permissions
to the group, run:

```
/nucleus setupperms <ROLE> <group>
```

where `<ROLE>` is one of the roles mentioned above, and `<group>` is the name of the group in your permissions plugin. So,
to grant the `USER` rights to the `default` group, you would run:

```
/nucleus setupperms USER default
```

Similarly, to add `ADMIN` permissions to your `administrators` group:

```
/nucleus setupperms ADMIN administrators
```

However, note that this command does not grant permissions of lower roles by default. To do so, add the
`-i` flag. So, to add `ADMIN`, `MOD` and `USER` permissions to the `administrators` group, run:

``` 
/nucleus setupperms -i ADMIN administrators
```

We recommend that you use permission group inheritance rather than this method, however.

Note that running this command will NOT overwrite any Nucleus permissions you have already set, so running
this command when you have updated Nucleus is safe. If you wish to overwrite any Nucleus permissions that
conflict, use the `-r` flag.

If you have set up a brand new server and have not yet created permission groups, you can ask Nucleus to do
so for you:

```
/nucleus setupperms -g
```

This will create a `default`, `mod`, `admin` and `owner` group with your Nucleus permissions ready to go.

### `nucleus.<role>` permissions (for Nucleus 1.6 and above only)

In Nucleus 1.6, the following permissions that automatically grants defaults:

* `nucleus.user` that acts as a "super permission" for any permission labelled as `USER` in the permission tables
* `nucleus.mod` that acts as a "super permission" for any permission labelled as `MOD` in the permission tables
* `nucleus.admin` that acts as a "super permission" for any permission labelled as `ADMIN` in the permission tables
* `nucleus.owner` that acts as a "super permission" for any permission labelled as `OWNER` in the permission tables

**These do not, and will never, override any explicit permission that has been set.**

As an example, you give your moderators the `nucleus.mod` permission. This, for example, gives them permission to enter staff chat. However, maybe you don't want them to access this. If you set `nucleus.staffchat.base` as `false`, this will override `nucleus.mod`. The same can be said for parent permissions, if you set `nucleus.staffchat` to `false`, a check to `nucleus.staffchat.base` will return `false`, regardless of whether `nucleus.mod` is set.

While this is cleaner than using `/nucleus setupperms`, you must be aware of the following:

* These "role" permissions will _never_ be given by default by `setupperms`.
* Any permissions added to Nucleus that fall into one of these roles **WILL** be granted by default if you have the role permission. **It is the responsibility of the server owner to check for any new features that may be added to these roles**.
* `/nucleus setupperms` will continue to exist, and will **not** grant new permissions automatically if they are added in new releases (but will if
 you re-run the setupperms commands).

If you want to use our suggested template and do not mind following our recommendations, use the role permissions. If you want to use our suggested template but **DO** want full control over what permissions you have, remain with `/nucleus setupperms`.

If you do not want to use the role permissions, this can be turned off in the config by setting `core.enable-parent-perms` to `false` and reloading.