// should take a command and its data and execute it 
//   - add, delete, list

// exports a constructor function
// has prototype method execute() that executes the correct operation, given the above object
//   - use the object to run correct method. how will we know? regex stuff?
//   - can predict that add wont be the only action we're goign to have...
// prototype method called add() that will create an object representing a note (with an ID and note text as props)
//   - console.log the text of the note to be added when the add command is executed

'use strict';

function Notes(){
  console.log('hello!');
}


module.export = Notes;