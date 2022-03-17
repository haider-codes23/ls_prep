function multiplyNumbers(a, b) {
  return a * b;
}

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  let number = Number(rlSync.question(prompt));
  return number;
}

let firstNumber = getNumber('Pick a nummber: \n');
let secondNumber = getNumber('Pick another number: \n');

console.log(`${firstNumber} * ${secondNumber} = ${multiplyNumbers(firstNumber, secondNumber)}`);
