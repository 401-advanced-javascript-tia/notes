// - should parse the users' input
// - map that to a command (add, delete, etc)
// - identify the data to give the command (the note text)

// exports a constructor function
// use minimist to read command line arguments
// on instantiation, evaluate and validate the input
//   - is the command ('-add', for ex) a valid command?
//   - is there data associated with the command?
// return an instance containing the ACTION to perform and the PAYLOAD for the action (this was method and url in today's demo)

const minimist = require('minimist');

function Input() {

  const args = minimist(process.argv.slice(2));

  console.log('args: ', args);

  if (args.add || args.a){

    this.action = 'add';
    this.payload = this.getPayload(args.add);

    // console.log('args.a', args.a);

  } else {
    console.log('error!');
  }
}

Input.prototype.getAction = function (action = '') {
  let validActions = /a|add/i;
  return validActions.test(action) ? action : 'ADD';
};

Input.prototype.getPayload = function (payload = '') {
  return payload ? payload : 'error';
};


module.exports = Input;