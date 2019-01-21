'use strict';

const fs = require('fs');
const util = require('util');
const events = require('./events.js');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const file = module.exports = exports = {};

file.loadFile = (file) => readFile(file);

file.saveFile = (file, buffer) => writeFile(file, buffer);

file.convertBuffer = (buffer) => Buffer.from(buffer.toString().trim().toUpperCase());

file.alterFile = (inboundFile) => 
  file.loadFile(inboundFile)
    .then( (contents) => file.convertBuffer(contents) )
    .then( (buffer) => file.saveFile(inboundFile.buffer) )
    .then( () => { events.emit('file-save', inboundFile); return true; } )
    .catch( (error) => events.emit('file-error', error) );
