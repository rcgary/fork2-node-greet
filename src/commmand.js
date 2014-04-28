var greet = require('../src/index');
var parseArgs = require('minimist');

function command() {
  argv = parseArgs(process.argv.slice(2));
  console.log(greet(argv._,argv.drunk));
}

module.exports = command;
