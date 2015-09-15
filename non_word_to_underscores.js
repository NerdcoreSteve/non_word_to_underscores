var readline = require('readline');
var readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

readline_interface.on('line', function(line){
    console.log(line.replace(/\W/g, "_"));
})
