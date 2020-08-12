'use strict';

// the below puts some "fakies" in there and allows us to focus on the actual tests, it gives us something to test with
jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    a: 'This is a note',
  };
});



const Input = require('../lib/input.js');
const minimist = require('minimist');



// notes from demo during class:

test('parse should give us a good noteCommand', () => {

  let input = Input();
  let command = input.parse({ a: 'test'});

  expect(command.action).toBe('add');

});
