greet = require('../lib/index');
parseArgs = require('minimist');

module.exports = ommand = ->
  argv = parseArgs(process.argv.slice(2))
  console.log greet(argv._, argv.drunk)
  return

