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
// jest.spyOn(global.console, 'log');


// beforeEach(notes.clear);
// previously we used the above because we had a clear() method on the notes production code

const notesModel = require('../lib/model/notes-schema.js');

beforeEach( async () => {
  return notesModel.deleteMany({});
});

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

  // THE BELOW DOESNT LIKE .CATEGORY OF SAVEDNOTE. SAVEDNOTE UNDEFINED. CONSOLE LOG IT OUT
  // it('addNote() can return a saved note', () => {
  //   const action = 'add';
  //   const payload = 'test note';
  //   return notes.execute({ action, payload })
  //     .then(savedNote => {
  //       expect(savedNote.category).toBe('general');
  //       // 'general' because this is the default category declared in the schema
  //       expect(savedNote.text).toBe('test note');
  //     });
  // });

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

  it('should return ALL notes when executing list command with no category', async () => {
    const firstNote = {action: 'add', payload:'first note with NO category'};
    const secondNote = {action: 'add', payload:'second note with NO category'};
    
    await notes.execute(firstNote);
    await notes.execute(secondNote);
    const list = await notes.execute({action: 'list'});
    expect(list.length).toBe(2);

    expect(list[0].text).toBe('first note with NO category');
    expect(list[1].text).toBe('second note with NO category');



  });

});

describe('Delete Note', () => {

  it('when a note is deleted, it is no longer in list', () => {
   
    
  });

  
  it('when the schema is searched, the record is not in the database', () => {
    
    
  });


});

// ------------------------------------
// MON EVE DEMO, CHECKING ON CONSOLE LOGS 

it('should log properly after valid add', async () => {

  jest.spyOn(global.console, 'log');

  await notes.execute({action: 'add', payload: 'Testing added payload'});

  expect(console.log).toHaveBeenCalledWith('Note saved:', 'Testing added payload');
});

// it('should delete with good id', async () => {
  
//   const addedNote = await notes.execute({action: 'add', payload: 'Testing added payload'});
  
//   await notes.execute({action: 'delete', payload: addedNote._id});

//   jest.spyOn(global.console, 'log');

//   expect(console.log).toHaveBeenCalledWith('Note Deleted:', addedNote._id);

// });

