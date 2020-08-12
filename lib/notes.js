// should take a command and its data and execute it 
//   - add, delete, list

// exports a constructor function
// has prototype method execute() that executes the correct operation, given the above object
//   - use the object to run correct method. how will we know? regex stuff?
//   - can predict that add wont be the only action we're goign to have...
// prototype method called add() that will create an object representing a note (with an ID and note text as props)
//   - console.log the text of the note to be added when the add command is executed

'use strict';

function Notes(noteInfo) {

  this.action = noteInfo.commandNote.action;
  this.payload = noteInfo.commandNote.payload;

  console.log('hello! you are in Notes constructor');

}


Notes.prototype.execute = function () {

  switch (this.action) {
  case 'add':
    //we will add other actions here, can we do || or will we write more case conditionals?
    this.addNote(this.payload);
    break;
  default:
    break;
  }

};


Notes.prototype.addNote = function(payload) {
  console.log(`Adding the following note: ${payload}`);
};

module.exports = Notes;