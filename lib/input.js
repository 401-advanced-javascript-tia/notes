// - should parse the users' input
// - map that to a command (add, delete, etc)
// - identify the data to give the command (the note text)

// exports a constructor function
// use minimist to read command line arguments
// on instantiation, evaluate and validate the input
//   - is the command ('-add', for ex) a valid command?
//   - is there data associated with the command?
// return an instance containing the ACTION to perform and the PAYLOAD for the action (this was method and url in today's demo)

'use strict';

const minimist = require('minimist');

class Input {

  constructor() {
    const args = minimist(process.argv.slice(2));
    this.command = this.parseNote(args);
  }

  parseNote(args){
    
    let argOptions = {
      a: 'add',
      add: 'add',
      d: 'delete',
      delete: 'delete',
      l: 'list',
      list: 'list',
    };
    
    let key = Object.keys(args).filter(item => argOptions[item]);
    // this is called a switch, we're making sure the main switch (command in argOptions) is there

    let action = argOptions[key];

    let payload = typeof args[key] === 'string' ? args[key] : undefined;

    let category = args.c || args.category; 
    //category is going to be nothing or the right thing, so this is all we need to do for it. if its nothing it means they didnt pass in anything. if its a wonky command theyll get the command error message anyway

    return { 
      action,
      payload,
      category,
    };
    // we can do the above because we'd have action:action, payload:payload, category:category and because its the same work we can just write it as the above. neat!

    //"SHAPE OF AN OBJECT"- number of keys and the often the types of data that are associated with them (kind of similar to the signature of a function)

  }


  validateNote() {

    //command needs an action
    // --add should have a valid payload
    // --delete should have a valid payload
    // --list doesn't need payload 

    if (!this.command.action) {
      return false;
    }

    if (this.command.action === 'add') {
      if (!this.command.payload) {
        return false;
      }
    }

    if (this.command.action === 'delete') {
      if (!this.command.payload) {
        return false;
      }
    }

    return true;
  }
  

}




module.exports = Input;



