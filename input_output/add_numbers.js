let rlSync = require('readline-sync');
let num1 = Number(rlSync.question('Please enter the first number:\n'));
let num2 = Number(rlSync.question('Please enter the second number:\n'));
console.log(`The numbers ${num1} and ${num2} add to ${num1 + num2}`);