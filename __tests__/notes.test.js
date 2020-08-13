// Jest docs: https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname
// jest.spyOn(object, methodName)
// Creates a mock function similar to jest.fn but also tracks calls to object[methodName]

'use strict';

// jest.mock('minimist');
// const minimist = require('minimist');


// minimist.mockImplementation(() => {
//   return {
//     a: 'This is a note',
//   };
// });

// describe('Notes Module', () => {


//   // test that asserts that if nothing is logged to the console, there is no command given
//   test('nothing is logged to console, no command given', () => {

//     let input = new Input();
//     input.command.payload = '';
//     let note = new Notes(input);

//     const spyOnLog = jest.spyOn(note, 'execute');

//     expect(note.payload === true);
//     expect(spyOnLog).toHaveBeenCalledTimes(0);

//   });

//   // test that asserts that if the command (add) and the data (the note) were both valid, the console shows the output 

//   it('if add command and following data is valid, addNote() logs note', () => {

//     let input = new Input();
//     input.command = {action: 'add', payload: 'this is the test note'};
//     let note = new Notes(input);

//     const spyOnaddNote = jest.spyOn(note, 'addNote');

//     note.addNote();

//     expect(spyOnaddNote).toBeCalled();

//   });



// });
          
          
require('@code-fellows/supergoose');


const Notes = require('../lib/notes.js');
const Input = require('../lib/input.js');

const notes = new Notes();
jest.spyOn(notes, 'addNote');

describe('Note Module', () => {

  it('execute() does nothing with invalid options', () => {
    return notes.execute({})
      .then(() => {
        expect(notes.addNote).not.toHaveBeenCalled();
      });
  });

  it('notes() can add a note', () => {
    const action = 'add';
    const payload = 'test note';
    return notes.execute({ action, payload })
      .then(results => {
        expect(notes.addNote).toHaveBeenCalled();
      });
  });

  it('notes() can return a saved note', () => {
    const action = 'add';
    const payload = 'test note';
    return notes.execute({ action, payload })
      .then(savedNote => {
        expect(savedNote.category).toBe('general');
        expect(savedNote.text).toBe('test note');
      });
  });

});