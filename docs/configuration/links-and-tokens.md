---
layout: standardheadmd
title: Documentation Centre
header: Links & Tokens
---

In several places in Nucleus, there is the option for links and chat placeholders (what we usually call _tokens_) to be used.
The most obvious places that they can be used is in the `motd.txt` and various info files, but other modules accept them,
including broadcasts.

Modules will include a link to this page where the funtionallity is supported.

## Creating Links

Links can be included in various text locations using limited markdown syntax.

* `http://nucleuspowered.org` - creates a link automatically
* `[Hello](http://nucleuspowered.org)` - creates a link titled `Hello` to `http://nucleuspowered.org`
* `[Rules](/rules)` - creates a link titled `Rules` that will run `/rules` when clicked.
* `[Blah](/msg {{player}} player` - Create a link that sends the message "player" to the player who is clicking the link entitled `Blah`.

## Tokens/Variables

The following tokens can be used in both the `motd` and `info` files, and will be replaced at runtime.

{% assign com = site.data.tokens | sort: 'name' %}
{% for token in com %}* `{% raw %}{{{% endraw %}{{ token.name }}{% raw %}}}{% endraw %}` - {{ token.description }}
{% endfor %}

