---
layout: standardheadmd
title: '- Nucleus Developers'
header: Creating a Simple module
---

## Explanation
A simple module is a module which does not have any configuration whatsoever. You can add commands, listeners, and tasks to a module. In 
order to begin creating a module you must first locate the `io/github/nucleuspowered/nucleus/modules` package. Next a new
package must be created which will contain the new module. The package should be named the same or similar to the module ID. To finish with creating a very basic module all that needs doing is creating a new class in the package that extends `StandardModule`. Next the `@ModuleData` annotation must be added including a String id and name for the module. The `plugin` variable is automatically available for use in the module class.

## Example

```java
package io.github.nucleuspowered.nucleus.modules.test;

import io.github.nucleuspowered.nucleus.internal.qsml.module.StandardModule;
import org.slf4j.Logger;
import uk.co.drnaylor.quickstart.annotations.ModuleData;

@ModuleData(id = "test", name = "Test Module")
public class TestModule extends StandardModule {

  @Override public void onEnable() {
        super.onEnable();
        Logger logger = this.plugin.getLogger();
        logger.info("test module has been enabled!");
    }
}
```
The provided code above will load the module and the logger will print "test module has been enabled!" when the module is successfully
enabled.
