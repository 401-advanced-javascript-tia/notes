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

// PHASE 4 - bring in notes-collection.js as an intermediary layer 


'use strict';

const notesModel = require('./model/notes-schema.js');
// const { schema } = require('./model/notes-schema.js');

const NotesCollection = require('./model/notes-collection.js');


class Notes {

  constructor() {
    this. collection = new NotesCollection();
    //added this when we transitioned to using notes-collection.js, instead of doing the above in each method we can just create it as the constructor and then use 'this' in each method
  }
  
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
      // this is saying we were about to do some async thing here, but we're not now, cause none of the conditions were met here, but we want you to deal with this in an async way so we do this. its forcing a successful resolution of the Promise. kind of like a return.
    }
  }


  async addNote(text, category) {

    // const newNote = new notesModel({ category, text});

    // let savedNote = await newNote.save();
    // commenting out the above since we're transiting to using the notes collection

    // const nc = new NotesCollection();
    // commented the above out when we moved new NotesCollection() into the constructor above, and changed the below from await nc.create() to await this.collection.create()

    const savedNote = await this.collection.create({text, category});

    console.log('Note saved:', text);

    return savedNote;
    // removed the below when we changed line above from const savedNote = to just return that line

  }


  async listNote(category) {
    //getting them all, and logging them out
    console.log('category in listNote, which is payload', category);

    const categoryPayload = category ? {category} : {};

    // let categoryPayload = {category};
    // const foundNotes = await notesModel.find(categoryPayload);

    const foundNotes = await this.collection.get(categoryPayload);
    
    console.log(`The following notes were found in the ${category} category:`);

    foundNotes.forEach(note => {
      console.log('');
      console.log(note.text);
      console.log('- - - - - - - - - - - - - - - - - - -');
      console.log(`Category: ${note.category}`);
      console.log(`ID: ${note._id}`);
      console.log('_____________________________________');
      console.log('');

    });

    return foundNotes;

  }

  async deleteNote(id) {
    // deleted the note, and log it out

    // console.log('id in deleteNote:', id);

    // const foundNote = await notesModel.findById(id);
    // console.log('This note was found:', foundNote);

    // await notesModel.findByIdAndDelete(id)
    //   .then(() => {
    //     console.log('');
    //     console.log('-------------------------------------');
    //     console.log('');
    //     console.log('You have sucessfully deleted that note!');
    //   }).catch(() => {
    //     console.log('Note not deleted. Please try again using the ID.');
    //   });

    await this.collection.delete(id);

    console.log('');
    console.log('-------------------------------------');
    console.log('');
    console.log(`Note Deleted: ${id}`);

  }

  // clear() {
  // // super destructive, only to be called while testing, BEWARE!!
  // we were able to not use this any more when we added the beforeEach into the notes.test.js file

  //   return notesModel.deleteMany({});

  // }

}


module.exports = Notes;