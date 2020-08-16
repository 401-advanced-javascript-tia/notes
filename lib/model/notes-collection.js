'use strict';

// this collection file is meant to "insert itself" as a middle layer between notes schema and the previous user of notes schema (which is notes.js module)

const NoteModel = require('./notes-schema.js');

// need get(), create(), delete()


class NoteCollection {

  get(category) {

    // console.log('CATEGORY in get in notes collection:', category);

    const categoryStr = category.category;

    if(categoryStr){
      return NoteModel.find({ category: categoryStr});
    } else {
      console.log('Could not find that category. Below are all the saved notes:');
      console.log('');
      return NoteModel.find({});
      //find everything, #nofilter, didnt give any addtl criteria
    }
  }

  create(info) {

    const newNote = new NoteModel(info);
    return newNote.save();
    // is save() a method of mongoose? or would i use saveNote here?

  }

  update() {
    // not doing this one since it was not originally required in previous labs, and this is meant to be a refactor
    // this could be a stretch goal

  }



  async delete(id) {
    
    const foundNote = await NoteModel.findById(id);

    console.log('This note was found:', foundNote);

    await NoteModel.findByIdAndDelete(id)
      .then(() => {
        console.log('');
        console.log('-------------------------------------');
        console.log('');
        console.log('You have sucessfully deleted that note!');
      }).catch(() => {
        console.log('Note not deleted. Please try again using the ID.');
      });

  }

}

module.exports = NoteCollection;
