// should take a command and its data and execute it 
//   - add, delete, list

// PHASE 1 - exports a constructor function
// has prototype method execute() that executes the correct operation, given the above object
//   - use the object to run correct method. how will we know? regex stuff?
//   - can predict that add wont be the only action we're goign to have...
// prototype method called add() that will create an object representing a note (with an ID and note text as props)
//   - console.log the text of the note to be added when the add command is executed


// PHASE 2 - change prototypes to es6 classes

// PHASE 3 - save to db! also need to do with --list and --delete commands


'use strict';

const NotesModel = require('./model/notes-schema.js');





class Notes {
  
  // constructor(noteInfo){
    // this.action = noteInfo.command.action;
    // this.payload = noteInfo.command.payload;
  // }

  
   async execute(noteObjFromInput) {
  
    switch (noteObjFromInput.action) {
    case 'add':
     return this.addNote(noteObjFromInput.payload, noteObjFromInput.category);
    case 'list':
      return this.listNote(noteObjFromInput.category);
    case 'delete':
      return this.deleteNote(noteObjFromInput.payload);
    default:
      return Promise.resolve();
      //what is the above? ask in code review
    }
  }


  async addNote(text, category) {

    // console.log(`Adding the following note: ${payload}`);

    const newNote = new NotesModel({ category, text});

    let savedNote = await newNote.save();

    return savedNote;

  }

  async listNote(category) {

  }

  async deleteNote(id) {

  }


}


module.exports = Notes;