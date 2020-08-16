// Jest docs: https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname
// jest.spyOn(object, methodName)
// Creates a mock function similar to jest.fn but also tracks calls to object[methodName]

'use strict';
          
require('@code-fellows/supergoose');


const Notes = require('../lib/notes.js');

const notes = new Notes();
jest.spyOn(notes, 'addNote');
jest.spyOn(notes, 'listNote');
jest.spyOn(notes, 'deleteNote');


beforeEach(notes.clear);

describe('Note Module', () => {

  it('execute() does nothing with invalid options', () => {
    return notes.execute({})
      .then(() => {
        expect(notes.addNote).not.toHaveBeenCalled();
      });
  });

  it('addNote() can add a note', () => {
    const action = 'add';
    const payload = 'test note';
    return notes.execute({ action, payload })
      .then(results => {
        expect(notes.addNote).toHaveBeenCalled();
      });
  });

  it('addNote() can return a saved note', () => {
    const action = 'add';
    const payload = 'test note';
    return notes.execute({ action, payload })
      .then(savedNote => {
        expect(savedNote.category).toBe('general');
        // 'general' because this is the default category declared in the schema
        expect(savedNote.text).toBe('test note');
      });
  });

});

describe('List Note', () => {

  it('when user commands --list, relevant records are returned ', async () => {
    
    const firstNote = {action: 'add', payload:'first note in \'test\' category', category: 'test'};
    const secondNote = {action: 'add', payload:'second note in \'test\' category', category: 'test'};

    await notes.execute(firstNote);
    await notes.execute(secondNote);
    const allNotes = await notes.listNote('test');
    expect(allNotes.length).toBe(2);

  });

});

describe('Delete Note', () => {

  it('when a note is deleted, it is no longer in list', () => {
   
    
  });

  
  it('when the schema is searched, the record is not in the database', () => {
    
    
  });


});
