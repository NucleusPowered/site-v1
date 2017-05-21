---
layout: standardheadmd
title: '- Nucleus API - Message Tokens'
header: Message Tokens
---

## Introduction

Nucleus exposes many methods to work with it's Text parser, including being able to use and create your own custom tokens.
In both cases, you will need to get the `NucleusMessageTokenService`, which is always available when Nucleus is installed.

## Obtaining the service

You can either get the `NucleusMessageTokenService` from Sponge's service manager, or by the static method on the 
`NucleusAPI` class, `NucleusAPI.getMessageTokenService()`.

## Using the Nucleus Text Parser, the `NucleusTextTemplate`

Nucleus accepts two types of input string to transform into a Nucleus text, anything in the `TextTemplate` format,
and anything in our custom ampersand based format. Simply pass the string into the 
`NucleusMessageTokenService.createFromString(String)` API method, and a `NucleusTextTemplate` will be returned.
You can then get a tailored message from a particular command source using 
`NucleusTextTemplate#getForCommandSource(CommandSource)`, which will parse the tokens for you and give you the 
required `Text`.

## Creating your own message tokens

{% raw %}
If you are developing a plugin and you would like to be able to display information in Nucleus' text, such as info files or the
MOTD, Nucleus provides a way to do so on a per plugin basis.

In order to avoid conflicts, Nucleus provides each plugin a token template based on their plugin ID, 
`{{pl:[pluginid]:<identifier>}}`. Plugins will be passed the `identifier` string of any token, which the plugin can
do what it needs to with, including returning an empty `Optional` to indicate an invalid identifier.

To do this, a plugin must register a `NucleusMessageTokenService.TokenParser` object. This is a simple, one function
interface that simply tells Nucleus how to work with a message token that is designed for your plugin. You register your 
plugin with the `TokenParser` using the function `NucleusMessageTokenService.register(PluginContainer, TokenParser)` method.

As an example, if your are registering a token from your plugin class, you could run the following:

```java
PluginContainer pluginContainer = Sponge.getPluginManager().fromInstance(this); // example, let's say the plugin id is "eggs"
try {
    NucleusAPI.getMessageTokenService().register(pluginContainer, (tokenInput, source, variables) -> {
        if (tokenInput.equals("bacon") {
            return Text.of("bacon ", source.getName());
        }

        if (tokenInput.starts("spam") {
            return Text.of("lovely ", tokenInput, " ", source.getName());
        }

        // Indicates this is not valid.
        return Optional.empty();
    });
} catch (PluginAlreadyRegisteredException ex) {
    // You've tried to register the plugin more than once.
}
```

This will register the token `{{pl:[pluginid]:<id>}}`, your `TokenParser` will receive the contents of the `<id>` part. In the
example above, if Nucleus was displaying some text with your token to the player named "spamalot", then you'd get the following 
results:

|Token|Result|
|---|---|
|`{{pl:eggs:bacon}}`|bacon spamalot|
|`{{pl:eggs:bacon2}}`|_Empty Optional_|
|`{{pl:eggs:spam}}`|lovely spam spamalot|
|`{{pl:eggs:spamspam}}`|lovelyspamspam spamalot|
|`{{pl:eggs:somethingelse}}`|_Empty Optional_|
{:.table .table-striped}

Of course, you do not have to pass the `TokenParser` as a lambda, if you would rather derive a class from `TokenParser`
and pass that, that will work too.
{% endraw %}

### Creating a primary token ({% raw %}`{{id}}`{% endraw %})

{% raw %}
Nucleus lets you create what we call a "primary token" too. Primary tokens do not need the plugin specified, and works
like any other Nucleus token, such as `{{name}}`, in fact, all they are are aliases. 
{% endraw %}

You must have registered your plugin's `TokenParser` before you register a primary alias.

{% raw %}
Say you want to register the token `{{lovelyspam}}`, and you want it to do what `{{pl:eggs:spam}}` does. All you have to
do is register your token using the method
{% endraw %}

```java
boolean registerPrimaryToken(String primaryIdentifier, PluginContainer registeringPlugin, String identiferToMapTo)
```

Specifically, in this example, you'd run

```java
boolean result = registerPrimaryToken("lovelyspam", pluginContainer, "spam");
```

Note that this function returns a boolean. Make sure you check the return value, your primary token will only work if 
it returns "true"! Primary tokens are registered on a first come, first served basis, so if you are not the first to 
request the primary token, it will return "false".

To go back to our example, putting this all together:

```java
Logger logger = myLogger;
PluginContainer pluginContainer = Sponge.getPluginManager().fromInstance(this); // example, let's say the plugin id is "eggs"
try {
    NucleusAPI.getMessageTokenService().register(pluginContainer, (tokenInput, source, variables) -> {
        if (tokenInput.equals("bacon") {
            return Text.of("bacon ", source.getName());
        }

        if (tokenInput.starts("spam") {
            return Text.of("lovely ", tokenInput, " ", source.getName());
        }

        // Indicates this is not valid.
        return Optional.empty();
    });
} catch (PluginAlreadyRegisteredException ex) {
    // You've tried to register the plugin more than once.
    logger.error("You've already registered this plugin!");
    return;
}

// Now, let's register the primary token.
if (NucleusAPI.getMessageTokenService().registerPrimaryToken("lovelyspam", pluginContainer, "spam")) {
    {% raw %}logger.info("Registered {{lovelyspam}}!");{% endraw %}
} else {
    {% raw %}logger.warn("Could not register {{lovelyspam}}. Use {{pl:eggs:spam}} instead.");{% endraw %}
}
```
{% raw %}
Assuming that the primary token registered correctly, you can now use `{{lovelyspam}}` in Nucleus messages, such as the
MOTD, and it'll display the same as `{{pl:eggs:spam}}`, that is, for "spamalot", "lovely spam spamalot".{% endraw %}

