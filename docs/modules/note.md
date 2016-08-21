---
layout: modulespec
title: Documentation Centre
header: Note Module
moduleid: note
modulename: Note
---

## Introduction

The notes module allows for notes to be added to other users to keep track of information. Users with permission can add notes to users and the added notes can then be checked using the /checknotes command.

Players will never see notes about them.

## Adding and reading player notes

The `/note <player> <note>` command adds a note to a player, which can be read using the `/checknotes <player>` command.
 
## Removing notes

To remove a note, the `/checknotes` command provides a link to do so. Otherwise, after getting a note's ID, you can use that as a the index to the `/removenote <user> <index>` command.

To delete all of a user's notes, use the `/clearnotes <user>` command.

## Configuration options
`show-login` - If true, users with the permission `nucleus.note.showonlogin` will be shown a user's notes when they login.