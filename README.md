![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 06 - Event Driven Applications

### Author: Brent Woodward

### Links and Resources
[![Build Status](https://www.travis-ci.com/BrentTech/06-event-driven-apps.svg?branch=master)](https://www.travis-ci.com/BrentTech/06-event-driven-apps)
* [repo](https://github.com/BrentTech/06-event-driven-apps)
* [travis](https://www.travis-ci.com/BrentTech/06-event-driven-apps)

### Modules
#### `/lib/events.js`
##### Exported Values and Methods
Creates and exports and instance of Events for other files to reference and work with.

#### `/lib/files.js`
##### Exported Values and Methods
###### `loadFile(file) -> buffer`
Reads file and converts to buffer
###### `saveFile(file, buffer) -> fs.writeFile`
Takes in buffer and writes to new file.
###### `convertBuffer(buffer) -> string`
Converts buffer to string.
###### `alterFile(file) -> events.emit(save or error), file saved.`
Processes the chain of load, convert, save functions listed above.

#### `/lib/logger.js`
##### Exported Values and Methods
###### `save() -> event.on(string)`
Logs save events.
###### `err() -> event.on(string)`
Logs error events.

### Setup
#### `.env` requirements
* `PORT` - Port set by environment.

#### Running the app
* `node app.js ...args`


#### Tests
* How do you run tests?
`npm test`
* What assertions were made?
File and buffer validation, conversion, error handling.
* What assertions need to be / should be made?
