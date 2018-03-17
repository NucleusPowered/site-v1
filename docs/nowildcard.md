---
layout: standardheadmd
title: Documentation Centre
header: The Permissions Wildcard (And Why You Shouldn't Use It)
---

One of the biggest issues that we come across in the Nucleus discord is that people complain they vanish on login, or that they don't realise they are vanished and so no mob targets them. Another less common one is that sometimes admins realise that they can't go AFK, or that they keep their inventory on death.

All of these problems are not bugs, they are due to the setup of your permissions plugin: **you used the `*` or `nucleus` wildcards**. In fact, it gets worse with GriefPrevention, because GP uses the permission system as a data store!

**Using the wildcard is bad.** Sponge is a very different ecosystem to Bukkit and has a somewhat simpler to understand (but perhaps less flexible) permission system (at least from the server admin level). Unlike in Bukkit (which used a system called _superperms_), where giving a wildcard does not give all permissions if a plugin specified how wildcards should work, Sponge has no such concept. Unfortunately, the Bukkit way of doing things has brought upon bad habits amongst server owners, especially those who didn't realise that the wildcard didn't actually give all permissions, just those that the plugins in question thought were good admin permissions.

So please, when creating your server, please use our `/nucleus setupperms` command instead.

## What * did in Bukkit

It's very important to note that the practice of using `*` came from Bukkit and the Superperms system.

In Bukkit, when the permissions API was developed for it, there was a system where a plugin could define what permissions it had and, more importantly, the behaviour of any wildcards. So, if I had the plugin `foo`, and the permission `foo.bar`, I could define what permissions would be granted by giving `foo.bar.*` - I could say `foo.bar.baz` is `true` while `foo.bar.evil` is `false`. This would then work for the `*` permission too. As you can see, this meant that admins didn't _actually_ get all permissions, which defeats the object of getting all permissions. 

A good example is Essentials for Bukkit. It had a permission for vanish on login, but because Bukkit had that superperms system, Essentials defined that permission as false _even when `*` was given_. So, Essentials **did** have that permission which **wasn't** set by `*`!

It's also important to note that in Bukkit, permission inheritance was **explicit**, so granting `foo.bar` **did not grant** `foo.bar.baz`, you'd have to give `foo.bar.*` - which might not even work anyway if the plugin set it up that way.

So, in Bukkit, `*` did **not** give all permissions, which encouraged the use of a wildcard as a lazy behaviour. A wildcard in any other system would mean everything. It sometimes did unexpected things too - some permission plugins had to have not only negative permissions, but then override permissions that overrode a negative permission! So, you might have ended up with the same permission three times to just give yourself that permission!

## What * does in Sponge

In Sponge, giving yourself the `*` perm does indeed give you **every** permission. There is no way for a plugin to say that a permission should be excluded from `*`, because in reality, _that makes no sense_. In any other sane application, `*` means everything. 

Sponge has **implicit** inheritance, granting `foo.bar` **does** grant `foo.bar.baz`. This is predictable behaviour. This is why granting the `nucleus` permission gives **all** Nucleus permission.

However, this includes the permission `nucleus.vanish.onlogin`, for example - it's right that this is a permission (permissions are simply server configurable true/false value stores), and so you give yourself the permission that tell Nucleus the player(s) in question should log in vanished! This is often _not what you want_, and has to be managed with either negative permissions or more careful use of the permissions in the first place.

Some players have complained that this is a permission in the first place, especially because server owners give * and then complain that it does something that they don't want. However, on the flip side, other owners have asked for this permission. It's **right** that this is a permission because, as I said before, a permission is simply a true/false store. 

The `*` permission wildcard is a practice that was never intended for Sponge. The intention was that there would be _no_ wildcard to discourage this behaviour. Using `*` is a lazy way to set up your server and gives unexpected results, which was reinforced by bad decisions made for Bukkit. 

## TL;DR:

If you use the `*` permission, please do not expect much help. We know there are many functions in Nucleus and there are a lot of permission nodes. We are looking to make this simpler for everyone, but please, don't work against us by using the wildcard and then complain because you're vanishing on login. Nucleus provides a simple way to set up admin permissions with a group with the `/nucleus setupperms` command, which can then be tweaked.