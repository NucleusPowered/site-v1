---
layout: modulespec
title: Documentation Centre
header: Mail Module
moduleid: mail
modulename: Mail
---

## Introduction

The Mail module allows players to send private messages to each other through the use of an inbox. The messages are stored until the user chooses to
clear them.

## Sending and Receiving Mail

Mail can be sent to another player using the `/mail send` command,

```
/mail send &lt;user&gt; &lt;message&gt;
```

The receiving player will receive a notification that they have a mail ready for them. They can read it using (filters will be explained below)

``` 
/mail [filter]
```

The player can clear their mail using the command

```
/mail clear
```

## Spying in Other's Mailboxes

If there is a need to investigate someone else's mail, the command is

```
/mail other &lt;user&gt; [filter]
```

## Mail Filters

Mail Filters allow users to filter the mail that gets displayed. The following filters are available:

* `p:[player]` - select mail from a certain player
* `m:[string]` - select messages that contain this string
* `c:` - select messages that are not from a player (e.g. console)
* `b:[days]` - select messages sent before the specified number of days from today (so `b:2` means messages sent more than two days ago)
* `a:[days]` - select messages sent after the specified number of days from today (so `a:2` means messages sent less than two days ago)

So, the filters `p:dualspiral b:2 m:Nucleus` will select messages sent by dualspiral more than 2 days ago that contain the string "Nucleus".