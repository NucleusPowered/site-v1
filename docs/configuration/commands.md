---
layout: standardheadmd
title: Documentation Centre
header: Command Management
---

In Nucleus, most Nucleus commands can be assigned a warmup and cooldown, and a cost, which can be done on a global basis, or on a per player/permission group
basis with a compatible permission plugin. All Nucleus root commands can also be disabled.

## Commands.conf

In the Nucleus config directory, there is a file, `commands.conf`. In this file, every Nucleus command has an entry, like so:

```hocon
home {
    # Time, in seconds, that a player has to wait between uses of this command. Set to 0 to disable.
    cooldown=10
    # Cost of a command that a player has to pay to use the command. The cost will only be deducted if successful. Set to 0 to disable.
    cost=0
    # Sets whether a command is enabled.
    enabled=true
    # Time, in seconds, that a player has to wait without moving or using other commands before their command will execute. Set to 0 to disable.
    warmup=0
}
```

For a subcommand, the key will be a period separated path, so for `/mail send`, look for `mail.send`:
 
```
"mail.send" {
    # Time, in seconds, that a player has to wait between uses of this command. Set to 0 to disable.
    cooldown=0
    # Cost of a command that a player has to pay to use the command. The cost will only be deducted if successful. Set to 0 to disable.
    cost=0
    # Time, in seconds, that a player has to wait without moving or using other commands before their command will execute. Set to 0 to disable.
    warmup=0
}
```

Setting warmups, cooldowns and costs globally is as simple as setting the options in this file. 

* A warmup is a period of time _before_ a command will actually run, which will be canceled if a player moves, is attacked or logs out.
* A cooldown is a period of time _after_ a command has run where it cannot be run again.
* A cost is a charge applied to a command before it runs. If the command fails, the cost is refunded.

Players can be exempted from these effects using permissions. If the command permission is `nucleus.home.base`, the exemption permission is:

* `nucleus.home.exempt.cooldown` for cooldowns
* `nucleus.home.exempt.warmup` for warmup 
* `nucleus.home.exempt.cost` for costs  

In other words, take `base` off the permission, and add `exempt.()`.

Some commands have command aliases that can be disabled. Such commands, like `/message`, have config sections like this:
 
```
message {
    aliases {
        tell=true
    }
    # Time, in seconds, that a player has to wait between uses of this command. Set to 0 to disable.
    cooldown=0
    # Cost of a command that a player has to pay to use the command. The cost will only be deducted if successful. Set to 0 to disable.
    cost=0
    # Sets whether a command is enabled.
    enabled=true
    # Time, in seconds, that a player has to wait without moving or using other commands before their command will execute. Set to 0 to disable.
    warmup=0
}
```

The aliases can be turned on or off in the `<command>.aliases.<cmd>` config path, but will require a server restart to take effect.

## Per player/group command warmup/cooldown/cost

If you use a compatible permission plugin, you can use options/meta to set the warmups, cooldowns and costs. Options override the `commands.conf` file.
The permission option that needs to be set is:

* `nucleus.<command>.warmup` for warmups
* `nucleus.<command>.cooldown` for cooldowns
* `nucleus.<command>.cost` for cost

In this case, `<command>` is the same as the config key in `commands.conf`, so to set the warmup on the `/mail send` command, set the option `nucleus.mail.send.warmup`.

The command for common permission plugins to set these options are:

<em>For users:</em>

{% include permissionblock.html cmdtype="userOption" user="[user]" option="nucleus.[cmd].(warmup|cooldown|cost)" value="[number]" %}

<em>For groups:</em>

{% include permissionblock.html cmdtype="groupOption" user="[user]" option="nucleus.[cmd].(warmup|cooldown|cost)" value="[number]" %}

Exemption permission will bypass options.