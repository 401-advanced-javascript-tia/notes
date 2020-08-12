#!/usr/bin/env node
//allows us to directly execute the file (to tell it to run the file by just typing ./index.js instead of node index.js)

// this file is the app's entry point
// require the library files (input, notes)
// instantiate an instance of an "Input" parser module
//    - parses the command line input and returns the command and data
// passes command to Notes library, which executes the command

'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input();
const notes = new Notes(input);

console.log('input in index.js: ', input);
console.log('notes in index.js: ', notes);

input.validateNote() ? notes.execute() : error() ;


function error () {
  console.log('not sure how you got this far, but your note is still invalid. please try again');
}
