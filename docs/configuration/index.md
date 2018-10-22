---
layout: standardheadmd
title: Documentation Centre
header: Configuring Nucleus
---

When Nucleus starts for the first time, a few configuration files are generated at `conf/nucleus/`. Nucleus tries to choose sane defaults
but they aren't for everyone.

### Enabling and Disabling Modules

One of Nucleus' core strengths is the ability to enable and disable modules. By default, all modules are enabled, but both users
and plugins can request to disable modules.

As the server owner, you have the final say. To set the status of a module, in the `config/nucleus/main.conf` file, in the `modules` section, each module can be set to one of the
following statuses:

* `ENABLED` - The default, use the module unless a plugin requests for it to be disabled.
* `DISABLED` - Disable the module.
* `FORCELOAD` - Enable the module, even if a plugin requests for it to be disabled.

All changes will only take effect on a server restart. If the plugin does not recognise the keyword, it assumes `ENABLED`.

### Managing Commands

Nucleus also allows users to disable specific commands whilst leaving modules enabled. Nucleus also allows you to set warmups,
cooldowns and costs for specific commands. The commands can be managed at `conf/nucleus/commands.conf`.

See [the command management page](commands.html) for more info.

### Debug Mode

In the `main.conf` file, if the option `core.debug-mode` is set to `true`, Nucleus will print more errors to the console when something goes wrong. This is useful
when reporting errors to the Nucleus project. However, it's off by default to avoid spamming the console.

### Messages File

In the `main.conf` file, if the option `core.use-messages-file` is set to `true`, a `messages.conf` file is generated in the configuration folder.
This will generate a file with all the text used in Nucleus, which can be used for translation of general customisation.
Updates will not remove this file, but it will be added to.

Numbers that are wrapped in curly brackets (like `{0}`) are replaced when the plugin sends a message. They should not be
removed.

[If you want to translate Nucleus into your own language for the greater community, why not get involved in our translation
effort?](../translating.html)

### Module specific configuration

Each configuration option should be generated with a comment explaining its function.