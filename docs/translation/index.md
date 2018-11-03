---
layout: standardheadmd
title: Documentation Centre
header: Translating Nucleus
---

<a href="index.html">&laquo; Return to Documentation Home Page</a>


# Translating Nucleus

Nucleus now has a translation server for translating almost everything in Nucleus. All you need is a github account to log into the server.

First, the nitty gritty. By logging into the translation server, you agree to use the system for translating Nucleus only. Please don't put profanities on there or anything of the sort, please don't add your own names into the strings. I have created a credits file on the main repo to add translators to who wish to be credited (which you should be!)

Your e-mail address, as provided by Github, will be stored on my system. If, at any time, you wish for it to be removed, please contact me (dualsprial). While e-mail notifications are not enabled at this time, they may be at some point in the future. Your e-mail address will not be used for any other purpose, sold or freely given to third parties.

OK with that? You can head over to https://translate.nucleuspowered.org/ and start translating! I'll put updates before releases, which may cause incomplete translations I guess, but will show the progress!

[There is a guide on how to use the system to translate here.](translation/using.html)

## OK, so what is translated?

_Nearly_ everything. There are some exceptions:

* Developer error messages that I would need to diagnose things with, English is my language and to fix Nucleus, I need to understand the errors!
* Some startup messages - this is mostly due to my laziness and this should be fixed soon

## How do I use the translations in Nucleus?

Nucleus will attempt to use your system language, unless you set the `core.override-language` language, [which is a Locale ID that looks like this](https://www.oracle.com/technetwork/java/javase/javase7locales-334809.html#util-text).

In the future, the hope is that Nucleus will optionally pick up the language that a player has set on their client and send them that message, translated. I also hope to spin out a library to enable this in other plugins, once it matures in Nucleus.

## My language isn't listed, how do I get it added?

[Please open a Github Issue on the Nucleus repo with the language you wish to translate.](https://github.com/NucleusPowered/Nucleus/issues) 

## Thank you!

If you choose to volunteer your time, thank you! I can offer nothing in return but the love and warmth of the Nucleus community, but any and all help that Nucleus can get is truly appreciated. Thank you!