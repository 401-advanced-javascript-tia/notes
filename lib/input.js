// - should parse the users' input
// - map that to a command (add, delete, etc)
// - identify the data to give the command (the note text)

// exports a constructor function
// use minimist to read command line arguments
// on instantiation, evaluate and validate the input
//   - is the command ('-add', for ex) a valid command?
//   - is there data associated with the command?
// return an instance containing the ACTION to perform and the PAYLOAD for the action (this was method and url in today's demo)

const minimist = require('minimist');

function Input() {

  const args = minimist(process.argv.slice(2));
  this.commandNote = this.parseNote(args);

}

Input.prototype.parseNote = function (args) {
  
  let keyToCheck = Object.keys(args)[1];
  
  let argOptions = {
    a: 'add',
    add: 'add',
    //can later include d, delete, l, list here
  };
  
  if(keyToCheck in argOptions){
    
    let note = args[keyToCheck];

    return {
      action: keyToCheck,
      payload: note,
    };

  } else {
    console.log('invalid note type, please try \'add\'');
  }

};


Input.prototype.validateNote = function() {

  if (!(this.commandNote.payload === true)){
    return this.commandNote.payload;
  } else {
    console.log('unacceptable input, please provide a note');
  }

};


module.exports = Input;



