'use strict';

// PHASE 2 - use Jest and write tests that assert the app is working correctly. they need to show:
//   - Given good input, the validateNote() method returns true
//   - Given good input, the input module creates new instance with both action and payload properties

//   - Given invalid input, validateNote() method returns false


// mocking minimist library with the below, it puts some "fakies" in there and allows us to focus on the actual tests, aka it gives us something to test with

jest.mock('minimist');
const minimist = require('minimist');


minimist.mockImplementation(() => {
  return {
    a: 'This is a note',
  };
});

const Input = require('../lib/input.js');


describe('Input Module', () => {


  // test to see if good input causes the validateNote() method to return true
  test('validNote() should give good object', () => {

    let input = new Input();
    expect(input.validateNote()).toBeTruthy();

  });

  
  // test to see if good input creates new Input instance with action and payload props
  test('parse() should give us a good object', () => {
  
    let input = new Input();
    let command = input.parseNote({a: 'test'});
  
    expect(command.action).toBe('add');
    expect(command.payload).toBe('test');
  
  });


  // test to see if given bad input, validateNote returns false
  it('validateNote() with bad input returns false', () => {

    let input = new Input();
    input.commandNote = ''; 
    expect(input.validateNote()).toBeFalsy();
  });

});

