#!/usr/bin/env node
//allows us to directly execute the file (to tell it to run the file by just typing ./index.js instead of node index.js)

// this file is the app's entry point
// require the library files (input, notes)
// instantiate an instance of an "Input" parser module
//    - parses the command line input and returns the command and data
// passes command to Notes library, which executes the command

'use strict';

const mongoose = require('mongoose');

const MONGOOSE_URI = 'mongodb://localhost:27017/notes';

mongoose.connect(MONGOOSE_URI, {
  //27017 is the standard port
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input();
const notes = new Notes();

// console.log('input in index: ', input);

if (input.validateNote()) {
  notes.execute(input.command)
    .then(mongoose.disconnect)
    // if we don't have mongoose.disconnect it will stick around and hog the process until you disconnect
    .catch(error => console.error(error));
} else {
  error();
}

function error () {
  console.log('Please type a valid action and note. Consider the following:', '\n', '--add \'notes are neat\'', '\n', '--list', '\n', '-d', '\'this note\'');
}
