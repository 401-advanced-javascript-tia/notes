'use strict';

require ('@code-fellows/supergoose');

const localNotesCollection = require('../lib/model/notes-collection.js');

// test everything that can break! or test the things that are likely to break


function compareProperties(one, other) {
  for (const key in one) {
    expect(one[key]).toBe(other[key]);
  }
}

const notesModel = require('../lib/model/notes-schema.js');

beforeEach( async () => {
  return notesModel.deleteMany({});
});


describe('Notes Collection create() method', () => {

  it('should create - sunny day', async () => {
  // sunny day is a term used when youre talking about when everything goes right. not testing edge case, testing middle of the road, good data case

    const noteCollection = new localNotesCollection();
    const noteData = {text: 'Testing victory', category: 'victories'};
    const note = await noteCollection.create(noteData);

    // console.log('........ note', note);

    expect(note._id).toBeDefined();

    // expect(note.text).toBe(noteData.text);
    // expect(note.category).toBe(noteData.category);

    compareProperties(noteData, note);

  });

  it('should create with no category givem', async () => {
    const notesCollection = new localNotesCollection();
    const noteData = {text: 'general note'};
    const note = await notesCollection.create(noteData);
    expect(note._id).toBeDefined();
    compareProperties(noteData, note);
    expect(note.category).toBe('general');


  });

});

describe('Notes Collection delete() method', async () => {

  it('should delete a note', async () => {



    
    const noteCollection = new localNotesCollection();
    const noteData = {text: 'First note to test delete'};
    const note = await noteCollection.create(noteData);
    
    // console.log('note in notes-collection.test.js:', note);
    
    // expect(note._id).toBeDefined();
    
    // const deleteNote = await noteCollection.delete(note._id);
    // console.log(' DELETE NOTE IN NOTE COLLECTION TEST:', deleteNote);
    //ARGH! how do we test the delete methods??
    
    await noteCollection.delete(note._id);
    const noteToDelete = await noteCollection.get({'_id':note._id});
    
    expect(noteToDelete).not.toBeUndefined();
    
  });
    
    
    
    
});
  
  
describe('Notes Collection get() method', () => {



  
});
