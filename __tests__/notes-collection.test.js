'use strict';

require ('@code-fellows/supergoose');

const localNotesCollection = require('../lib/model/notes-collection.js');

// test everything that can break! or test the things that are likely to break


function compareProperties(one, other) {
  for (const key in one) {
    expect(one[key]).toBe(other[key]);
  }
}


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

});

describe('Notes Collection delete() method', async () => {

  const noteCollection = new localNotesCollection();
  const noteData = {text: 'First note in test category', category: 'test'};
  const note = await noteCollection.create(noteData);

  console.log('note in notes-collection.test.js:', note);

  expect(note._id).toBeDefined();

  const deleteNote = await noteCollection.delete(note._id);
  console.log(' DELETE NOTE IN NOTE COLLECTION TEST:', deleteNote);
  //ARGH! how do we test the delete methods??
  
  

});


describe('Notes Collection get() method', () => {



  
});
