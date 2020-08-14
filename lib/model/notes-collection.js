'use strict';

const NoteModel = require('./notes-schema.js');


class NoteCollection {

  create(info) {

    const newNote = new NoteModel(info);
    return newNote.save();
    // is save() a method of mongoose? or would i use saveNote here?

  }

  get() {

    return NoteModel.find({});
    //find everything, #nofilter, didnt give any addtl criteria
  }


  clear() {
    return NoteModel.deleteMany({});
    //this is super destructive so beware!!
  }

}

module.exports = NoteCollection;
