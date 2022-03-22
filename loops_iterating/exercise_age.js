let rlSync = require('readline-sync');
let userAge = Number(rlSync.question('How old are you ?\n'));

console.log(`You are ${userAge} years old`);


let years = 10;

for (let index = 1; index <= 4; index++) {
  console.log(`In ${years} years, you'll be ${userAge + years}`);
  years += 10;
}