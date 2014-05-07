# Change log

### v1.0.1
  * update dependencies

### v1.0.0
  * major version release
  * minor fixes

### v0.2.0

* Handlers (Commands/RequestResponse)
  * **BREAKING:** renamed `addHandler` to `setHandler` to clarify the point of single handlers per named item
  * Allow an `initialize` function when extending from the base type
  * Added a `setHandlers` function that takes an object literal as the parameter, to configure multiple handlers in a single call

* Commands
  * Introduced Wreqr.CommandStorage to store commands for later execution
  * When a command has no handler, it will be stored for later execution
  * When a handler for a stored command is added, the stored command will be
    executed

* Updated build process to use Grunt v0.4

### v0.1.1

* Fixed "option strict" to be "use strict" ... #facepalm :P
* Added jam package config

### v0.1.0

* Fix calls to `.apply` to account for IE < 9 throwing an error when `arguments` is null or undefined

### v0.0.1

* Commands
  * Can specify multiple arguments for `execute` method

* RequestResponse
  * Can speicfy multiple arguments for `request` method

### v0.0.0

* Initial release
