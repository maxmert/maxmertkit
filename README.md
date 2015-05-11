# [Maxmertkit](http://maxmert.com)

[![Join the chat at https://gitter.im/maxmert/maxmertkit](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/maxmert/maxmertkit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Build Status](https://travis-ci.org/maxmert/maxmertkit.svg?branch=master)](https://travis-ci.org/maxmert/maxmertkit)

Maxmertkit, powerful, most customizable and easiest for usage mobile first front-end framework for web-development, created by [Vetrenko Maxim](http://twitter.com/vmaxmert), and maintained by the [core team](https://github.com/maxmert?tab=members) with the support and involvement of the community.

To get started, check out <http://maxmert.com>!

## Table of contents

 - [Quick start](#quick-start)
 - [Bugs and feature requests](#bugs-and-feature-requests)
 - [Documentation](#documentation)
 - [Compiling CSS and JavaScript](#compiling-css-and-javascript)
 - [Contributing](#contributing)
 - [Community](#community)
 - [Versioning](#versioning)
 - [Author](#author)
 - [Copyright and license](#copyright-and-license)

## Quick start

Three quick start options are available:

- [Download the latest release](https://github.com/maxmert/maxmertkit/releases/latest).
- Clone the repo: `git clone https://github.com/maxmert/maxmertkit.git`.
- Install with [Bower](http://bower.io): `bower install maxmertkit`.

Read the [Start page](http://maxmert.com/start) for information on the framework contents, howto videos, examples, and more.

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations.


## Bugs, errors and feature requests

Have a bug, text error or a feature request? Please first read the [issue guidelines](https://github.com/maxmert/maxmertkit/blob/master/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/maxmert/maxmertkit/issues/new).


## Documentation

Maxmertkit's documentation, included in this repo in the root directory, is run with [Nodejs](http://nodejs.org). The docs may be run locally.

### Running documentation locally

**Go to [maxmert.com/start](maxmert.com/start) and watch HOWTO video**

1. If necessary, [install Nodejs](http://nodejs.org), [install NPM](http://npmjs.org), [install Bower](http://bower.io).
2. From the root `/maxmertkit` directory, run `npm install` in the command line.
3. Run `bower install` in the command line.
4. From the `/docs` directory, run `npm install` in the command line.
5. From the `/docs` directory, run `bower install` in the command line.
6. From the root `/maxmertkit` directory, run `gulp` in the command line.
7. Open <http://localhost:3333> in your browser.


### Documentation for previous releases

Documentation for v0.0.2 has been made available for the time being at <http://old.maxmert.com> while folks transition to Maxmertkit 1.0.0.



## Compiling CSS and JavaScript

Maxmertkit uses [Gulp](http://gulpjs.com/) with convenient methods for working with the framework. It's how we compile our code, run tests, and more. To use it, install the required dependencies as directed and then run some Gulp commands.

### Install Gulp

From the command line:

1. Install `gulp` globally with `npm install -g gulp` (maybe you'll need to run it with `sudo` – `sudo npm install -g gulp`).
2. Read about running documentation locally.

When completed, you'll be able to run the various Gulp commands provided from the command line.

**Unfamiliar with npm? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js. [Download and install node.js](http://nodejs.org/download/) before proceeding.

### Available Gulp commands

#### Build and watch (development) - `gulp`
Run `gulp` to run buld and run documentation locally. It will compile **[coffeescript](http://coffeescript.org/)** and **[sass](http://sass-lang.com/)** into `/docs` and run **[nodemon](https://github.com/remy/nodemon)** server at port **3333**.

#### Only compile CSS and JavaScript (production) - `gulp build`
Run `gulp build` to clear the `/build` directory and recompile all **[coffeescript](http://coffeescript.org/)** and **[sass](http://sass-lang.com/)** files with gzip and standart version.

#### Tests - `gulp test`


### Troubleshooting dependencies

Should you encounter problems with installing dependencies or running Gulp commands, uninstall all previous dependency versions (global and local). Then, rerun `npm install` and `bower install` in the root and **/docs** directory.



## Contributing

Please read through our [contributing guidelines](https://github.com/maxmert/maxmertkit/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, please include relevant unit tests. All HTML and CSS should conform to the [Code Guide](http://github.com/mdo/code-guide), maintained by [Mark Otto](http://github.com/mdo).



## Community

Keep track of development and community news.

- Follow [@maxmertkit on Twitter](http://twitter.com/maxmertkit).
- Follow [@vmaxmert on Twitter](http://twitter.com/vmaxmert).
- Implementation help may be found at Stack Overflow (tagged [`maxmertkit-1`](http://stackoverflow.com/questions/tagged/maxmertkit-1)).




## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Maxmertkit is maintained under the Semantic Versioning guidelines. Sometimes I screw up, but I'll adhere to these rules whenever possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

- Breaking backward compatibility **bumps the major** while resetting minor and patch
- New additions without breaking backward compatibility **bumps the minor** while resetting the patch
- Bug fixes and misc changes **bumps only the patch**

For more information on SemVer, please visit <http://semver.org/>.



## Author

**Vetrenko Maxim**

- <http://twitter.com/vmaxmert>
- <http://github.com/maxmert>
- <http://facebook.com/vetrenko.maxim>



## Copyright and license

Code and documentation copyright 2012-2014 Maxmert. Code released under [the MIT license](LICENSE). Docs released under [Creative Commons](docs/LICENSE).
