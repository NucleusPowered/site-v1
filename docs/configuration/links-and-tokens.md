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

## Token Modifiers

Tokens support modifiers that control whether a space should be appended or prepended to the token output if the token
exists.

The modifiers are:

* `p` to prepend a space
* `s` to append a space

To add a modifier to the end of a token, simply add ":[modifier]" at the end of the token (before {% raw %}}}{% endraw %}).
So, if you want your token (say, `name`) to have a space after it if it exists, the token would be 
`{% raw %}{{name:s}}{% endraw %}`. Similarly, if you wanted a space before and after, specify `{% raw %}{{name:sp}}{% endraw %}`. 