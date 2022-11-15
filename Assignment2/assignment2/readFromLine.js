
var readline = require('readline');
  
var rl = readline.createInterface(
        process.stdin, process.stdout);
  
rl.setPrompt(`Please enter your name: `);
rl.prompt();
rl.on('line', (name) => {
    console.log(`Hello ${name}`);
    rl.close();
});