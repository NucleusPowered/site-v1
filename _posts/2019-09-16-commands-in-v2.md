---
layout: posts
title: "Nucleus v2 - Commands"
date: 2019-09-16
---

I thought I'd spend a little bit of time talking about one of the changes in Nucleus that is taking up the bulk of my
time at the moment, commands. Commands are perhaps the _biggest_ reason to use Nucleus, after all, it's meant to be a
handy utilities plugin that does a lot of stuff on demand - so it's important that they are done right.

Before I continue, I should note that I'm not changing the commands from a user facing point of view, but from a 
developer point of view. If you're just a Nucleus user, you may not care to continue reading, though you might learn
how you can (at least in the future) read the code to find out what permissions a command might use!

Okay, if you're still with me - let's delve into how it works now.

## Commands in Nucleus v1

I'm going to pull out one of the more, uh, _confusing_ examples and show you the skeleton of the class. [I give to you,
the horrible, confusing absolutely badly written `/tpa`](https://github.com/NucleusPowered/Nucleus/blob/1.14.0/src/main/java/io/github/nucleuspowered/nucleus/modules/teleport/commands/TeleportAskCommand.java)!

```java
@Permissions(prefix = "teleport", suggestedLevel = SuggestedLevel.USER, supportsSelectors = true)
@NoWarmup(generateConfigEntry = true, generatePermissionDocs = true)
@RegisterCommand({"tpa", "teleportask", "call", "tpask"})
@NonnullByDefault
@EssentialsEquivalent({"tpa", "call", "tpask"})
@NotifyIfAFK(NucleusParameters.Keys.PLAYER)
@SetCooldownManually
public class TeleportAskCommand extends AbstractCommand<Player> implements Reloadable {

    private boolean isCooldownOnAsk = false;
    private final PlayerTeleporterService playerTeleporterService = getServiceUnchecked(PlayerTeleporterService.class);

    @Override
    public Map<String, PermissionInformation> permissionSuffixesToRegister() {
        Map<String, PermissionInformation> m = new HashMap<>();
        m.put("force", PermissionInformation.getWithTranslation("permission.teleport.force", SuggestedLevel.ADMIN));
        return m;
    }

    @Override
    public CommandElement[] getArguments() {
        return new CommandElement[] {
                GenericArguments.flags().permissionFlag(this.permissions.getPermissionWithSuffix("force"), "f").buildWith(NucleusParameters.ONE_PLAYER)
        };
    }

    @Override protected ContinueMode preProcessChecks(Player source, CommandContext args) {
        return this.playerTeleporterService
                .canTeleportTo(source, args.requireOne(NucleusParameters.Keys.PLAYER)) ? ContinueMode.CONTINUE : ContinueMode.STOP;
    }

    @Override
    public CommandResult executeCommand(Player src, CommandContext args, Cause cause) throws Exception {
           ....
    }

    @Override
    public void onReload() throws Exception {
        this.isCooldownOnAsk = getServiceUnchecked(TeleportConfigAdapter.class).getNodeOrDefault().isCooldownOnAsk();
    }
``` 

The implementation in `executeCommand` isn't important. However, there is a lot of information above - some of it says
"this is what I am", some of it says "this is what I am not", and some of it is simply pointers to what conventions might
happen - and this makes it nigh on impossible for contributors to contribute effectively...

I'll walk you through what is going on, starting with all the annotations:

```java
@Permissions(prefix = "teleport", suggestedLevel = SuggestedLevel.USER, supportsSelectors = true)
```

This tells the command to create a permission set for the command that starts `nucleus.teleport`, then adding the primary
alias of the command next in the chain to form `nucleus.teleport.tpa`, and use that as a root on all permission from this
command. The `base` permission as assigned the `USER` role (for setupperms), and the command supports selectors (legacy,
means nothing to the codebase now).

```java
@NoWarmup(generateConfigEntry = true, generatePermissionDocs = true)
```

Don't try to run a warmup with this command automatically, but in this case, generate the config entry anyway, and add 
this information to the documentation generator.

In this case, we don't add the warmup automatically because we actually put the warmup in from when a player accepts a
request, rather than before the asking itself.

```java 
@RegisterCommand({"tpa", "teleportask", "call", "tpask"})
```

Register the command with these aliases. `tpa` is the primary alias, used as a part of key throughout Nucleus. Not a 
subcommand of any other commands. 

```java
@NonnullByDefault
```

Sponge annotation - things do not return or use nulls unless otherwise stated.

```java
@EssentialsEquivalent({"tpa", "call", "tpask"})
```

For documentation purposes - what this command is equivalent to in Essentials.

```java
@NotifyIfAFK(NucleusParameters.Keys.PLAYER)
```

Used with command interceptors, if the player specified by the parameter with this key is AFK, tell the sender this.

```java
@SetCooldownManually
```

Cooldowns are not automatically controlled. Similarly to `@NoWarmup` above.

What this doesn't tell you is:

* The permissions used for warmup/cooldown/cost exemption
* That a cost can be imposed.
* That the command should have a description set in `commands.properties` as `tpa.desc` and, optionally, `tpa.extended`

So that's the annotations. We then have the command itself, and there are various methods to point out:

* `permissionSuffixesToRegister`: permissions associated with the command, but done in a very roundabout way to try to
   capture auto generated permissions.
* `getArguments`: what the command parameters are - this is surprisingly okay!
* `preProcessChecks`: what this actually does is run custom logic before any warmups, costs etc. take place. It allows
   for extra conditions to be checked before firing a command. Most commands don't use this.
* `executeCommand`: executes the command!
* `onReload`: actually part of the `Reloadable` interface, allows for state changes to be cached when the plugin is
   reloaded using `/nucleus reload` or Sponge's plugin reload event.

There is a lot of scaffolding (which is fine), but it relies on the developer to know everything they need to do. I 
was forgetting things, and it constituted a high bar to entry. So, I am re-wiring commands to make it easier to 
contribute to.

## Commands in Nucleus v2

In v2, the same command will look something like this:

```java
/**
 * Sends a request to a subject to teleport to them, using click handlers.
 */
@NonnullByDefault
@NotifyIfAFK(NucleusParameters.Keys.PLAYER)
@NucleusCommand(
        aliases = {"tpa", "teleportask", "call", "tpask"},
        basePermission = TeleportPermissions.BASE_TPA,
        commandDescriptionKey = "tpa",
        modifiers =
        {
                @CommandModifier(value = CommandModifiers.HAS_WARMUP, exemptPermission = TeleportPermissions.EXEMPT_WARMUP_TPA,
                        configGenerationOnly = true),
                @CommandModifier(value = CommandModifiers.HAS_COOLDOWN, exemptPermission = TeleportPermissions.EXEMPT_COOLDOWN_TPA,
                        configGenerationOnly = true),
                @CommandModifier(value = CommandModifiers.HAS_COST, exemptPermission = TeleportPermissions.EXEMPT_COST_TPA)
        }
)
@EssentialsEquivalent({"tpa", "call", "tpask"})
public class TeleportAskCommand implements ICommandExecutor<Player>, Reloadable {

    private boolean isCooldownOnAsk = false;

    @Override
    public CommandElement[] parameters() {
        return new CommandElement[] {
                GenericArguments.flags().permissionFlag(TeleportPermissions.TELEPORT_ASK_FORCE, "f").buildWith(NucleusParameters.ONE_PLAYER)
        };
    }

    @Override public Optional<ICommandResult> preExecute(ICommandContext<? extends Player> context) throws CommandException {
        boolean canTeleport = context.getServiceCollection().getServiceUnchecked(PlayerTeleporterService.class)
                .canTeleportTo(
                        context.getIfPlayer(),
                        context.requireOne(NucleusParameters.Keys.PLAYER, Player.class)
                );
        if (canTeleport) {
            return Optional.empty();
        }

        return Optional.of(context.failResult());
    }

    @Override
    public ICommandResult execute(ICommandContext<? extends Player> context) throws CommandException {
        ...
        return context.successResult();
    }

    @Override
    public void onReload(INucleusServiceCollection serviceCollection) {
        this.isCooldownOnAsk = serviceCollection.moduleConfigProvider()
                .getModuleConfig(TeleportConfig.class)
                .isCooldownOnAsk();
    }
}
```

There are some major differences - let's start with the annotations:

* `@NucleusCommand` is now the big "this is what defines the command". Note that the `@NotifyIfAFK` annotation has not
   yet been folded in, I've not quite decided how to do this yet. However, you should be able to see that:
   * The aliases of the command are `tpa`, `teleportask`, etc.
   * Warmups, Cooldowns and costs are supported, though the earlier two are just config entries that are generated -
     this means the command itself will handle setting and checking them.
   * The permissions are clear
   * If you were writing the command, the one-line description should be added to the translation key `tpa.desc` and
     the extended description should be at `tpa.extended` (javadocs will tell you this part).
* `@EssentialsEquivalent` remains as is, purely due to documentation
* The modifiers, such as warmup etc., now have to be specified to activate. This way, it's clear what the plugin will 
  generate, and what it will use.
* Permissions are no longer generated, and are stored in static classes as constants. They are now easy to find, and
  you don't have to guess what they are going to be called (for example, `TeleportPermissions.BASE_TPA` is simply a
  string you can read that tells you what the permission is straight off)!
* The command description root has now got to be specified. Javadocs will be expanded to explain how exactly this will 
  work, but the hope is that by defining it, contributors will have to look at the docs to see how to document.
  
The signatures of the methods have also changed (as well as being changed from extending `AbstractCommand` to 
implementing `ICommandExecutor`):

* `getArguments` becomes `parameters`
* The `preProcess` method is now `preExecute` and simply can tell a command whether or not we should return early, rather
  that giving `ContinueMode`s. They can be thought of as mini command executors that run before modifiers.
* `execute` now provides one parameter, `ICommandContext<? extends CommandSource>`. This contains all the information
  about the invocation that a command needs, as well as a `INucleusServiceCollection`, which allows commands to do 
  everything they could before with the `Nucleus` object. This will increase testability, and also (hopefully) enforce
  better practices. Also, rather than making command inherit multiple traits, commands can simply use this object to get
  at everything it requires. I will talk more about the `INucleusServiceCollection` another time.
* Methods on the `AbstractCommand` are now (mostly) on the `ICommandContext`.
* `onReload` now includes the `INucleusServiceCollection` for the same reason.
* The result is specified from the context, so that we have some platform agnostic behaviour that means I can minimise
  the work I need to do for API 8.

This exercise is going to take a little bit of time, but the benefits are huge. Permissions being specified, commands
not having to worry about clashes with the root object, no god object... these are things I've needed to do for some 
time, especially to support an upgrade to Sponge's upcoming API 8, but this system will initially support Sponge API 7.2, 
that is, for Minecraft 1.12.2.

## A final thought

For those of you holding out for external modules - this is one piece of the puzzle. By having a set of interfaces
control the system, I can pull these out into a sort of module API. Once v2 is up and running, work will be done to
finalise this abstraction and enable you to make your own modules - these changes are for you guys too!