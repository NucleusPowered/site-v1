# nucleuspowered.github.io
The content for http://nucleuspowered.org

## Previewing the site

Nucleus Docs uses Jekyll, as GitHub pages does. First, you'll need to install Jekyll:

* [UNIX systems](https://jekyllrb.com/docs/installation/)
* [Windows systems](https://jekyllrb.com/docs/windows/#installation)

Once installed, using the command line, navigate to this directory (the one with this README in) and run `jekyll s`. This should open a web browser at `http://localhost:4000` with a local copy of the docs.

When adding docs, do not commit the `site` directory.

## Updating Commands, Permissions & Essentials Equivalency tables

If you want to update the commands & permissions as well, with a test server:

* **Ensure all modules are enabled**
* **Add** the config option `enable-doc-gen=true` to somewhere in the `core` section
* Restart the server
* Once it's started, run `/nucleus docgen`
* Copy the YAML files to the `_data` folder

That should update the permission and command references with what is on the server.
