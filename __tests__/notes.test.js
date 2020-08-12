
jest.mock('minimist');
const minimist = require('minimist');


minimist.mockImplementation(() => {
  return {
    a: 'This is a note',
  };
});

const Notes = require('../lib/notes.js');


describe('Notes Module', () => {
  
  
  // test that asserts that if nothing is logged to the console, there is no command given

  // ***************************************************************
  // ------------- TUES EVE STOPPING POINT *************************
  // ********* COME BACK HERE, ET PHONE HOME************************

  test('addNote() should assert console.log of note', () => {

    let note = new Notes();
    expect(note.addNote()).toBeTruthy();

  });


  
  // test that asserts that if the command (add) and the data (the note) were both valid, the console shoes the output 
  //   - need to use a spy to check that a console.log was called 
  



});





// // test to see if good input causes the validateNote() method to return true
// test('validNote() should give good object', () => {

//   let input = new Input();
//   expect(input.validateNote()).toBeTruthy();

// });


// // test to see if good input creates new Input instance with action and payload props
// test('parse() should give us a good object', () => {

//   let input = new Input();
//   let command = input.parseNote({a: 'test'});

//   expect(command.action).toBe('add');
//   expect(command.payload).toBe('test');

// });


// // test to see if given bad input, validateNote returns false
// it('validateNote() with bad input returns false', () => {

//   let input = new Input();
//   input.commandNote = ''; 
//   expect(input.validateNote()).toBeFalsy();
// });