---
layout: modulespec
title: Documentation Centre
header: Command Logger Module
moduleid: command-logger
modulename: Command Logger
---

## Introduction

The Command Logger module simply allow you to log all commands that are run to be printed out to the console. They are subsequently logged to the log files.

## Configuration

Since 0.4, configuration has been available to filter the commands that are logged. The configuration options are available in
`main.conf`, under `command-logger`. The options are:

* `log-command-source` - allows control of whether players, command blocks, the console and other sources are logged.
* `command-filter` - the commands to log (if `whitelist` is set to `true`) or not log (if `whitelist` is set to `false`).
  * Note that only **one** alias for a command is required, so by listing `bc`, as this is an alias for `broadcast`, this
   command will be affected regardless of whether `/bc` or `/broadcast` is run.
