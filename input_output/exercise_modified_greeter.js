let rlSync = require('readline-sync');
let userFirstName = rlSync.question("What's your first name?\n");
let userLastName = rlSync.question("What's your last name?\n");
console.log(`Hello, ${userFirstName} ${userLastName}`);