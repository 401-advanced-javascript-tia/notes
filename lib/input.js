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
    // this above is called a switch which is described as _______________

    let action = argOptions[key];

    let payload = typeof args[key] === 'string' ? args[key] : undefined;

    let category = args.c || args.category; //should we search the argOptions for this too?
    
    return {
      action, 
      payload, 
      category, //id like to validate this as well to make sure they type c or category
    };

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



