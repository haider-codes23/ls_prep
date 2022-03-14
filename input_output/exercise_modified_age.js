let rlSync = require('readline-sync');
let userAge = Number(rlSync.question('How old are you ?\n'));
console.log(`You are ${userAge} years old`);

console.log(`In 10 years, you'll be ${userAge + 10}`);
console.log(`In 20 years, you'll be ${userAge + 20}`);
console.log(`In 30 years, you'll be ${userAge + 30}`);
console.log(`In 40 years, you'll be ${userAge + 40}`);


