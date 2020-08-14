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

const notesModel = require('./model/notes-schema.js');
// const { schema } = require('./model/notes-schema.js');


class Notes {
  
  async execute(commandObj) {
  
    switch (commandObj.action) {
    case 'add':
      return this.addNote(commandObj.payload, commandObj.category);
    case 'delete':
      return this.deleteNote(commandObj.payload);
      // we're sending the payload here becuase the id is in the payload
    case 'list':
      return this.listNote(commandObj.payload);
    default:
      return Promise.resolve();
      // we were about to do some async thing here, but we're not now, cause none of the conditions were met here, but we want you to deal with this in an async way so we do this. its forcing a successful resolution of the Promise. kind of like a return.
    }
  }


  async addNote(text, category) {

    const newNote = new notesModel({ category, text});

    let savedNote = await newNote.save();

    console.log('note saved in addNote:', newNote);

    return savedNote;

  }


  async listNote(category) {

    //show do a find of all notes with the category passed in to it
    console.log('category in listNote, which is payload', category);

    // const checkCategoryPayload = (category) ? {category} : {};
    //the above is meant to check if that 

    let categoryPayload = {category};

    const foundNotes = await notesModel.find(categoryPayload);
    console.log(`The following notes were found in the ${category} category:`);

    foundNotes.forEach(note => {
      console.log(note);
    });

  }

  async deleteNote(id) {

    console.log('id in deleteNote:', id);

    const foundNote = await notesModel.findById(id);
    console.log('foundNote in delete:', foundNote);

    await notesModel.findByIdAndDelete(id)
      .then(() => {
        console.log('You have sucessfully deleted that note!');
      }).catch(() => {
        console.log('Note not deleted. Please try again using the ID.');
      });

  }

}


module.exports = Notes;