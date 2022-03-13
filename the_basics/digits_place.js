// MY SOLUTION TO THE PROBLEM USING HACK AND SLASH METHOD
// decalred and intialized a number 
console.log("MY SOLUTION TO THE PROBLEM USING HACK AND SLASH METHOD\n")
let num = 4936;
// declared a variable thousandsPlace
// to find the thousands place in a 4- digit number we have to get the left most digit
// to get the LMD I divided the 4-digit number by 1000 which resulted in a floating-point number
// then i used Math object's floor method to round it off the floating-point to a whole number which gives us the left most digit
let thousandsPlace = Math.floor(num / 1000);
// to find the hundred's place i divided the 4 digit number by 100 which results in a floating point number 
// split evenly by a decimal. 
// then i applied the remainder operation on the reuslt with 10 which again results in a floating point
// number but htis time we have our required number on the LMS . Using Math object's floor method we round
// it off and get the digit which has originally in the hundreds place
let hundredsPlace = Math.floor((num / 100) % 10);
// to find the tens place i applied the remainder operation of the 4 digit number wit 100 which reulted 
// in a remiander that contain the last two digits . divided the result by 10 which then results in a
// floating point number that i rounded up using Math object's floor method
let tensPlace = Math.floor((num % 100) / 10);
// to find the ones place we have to find the right most digit
// to find the RMD I take the modulus of the 4 digit-number by 10 and the remainder results in the RMD
// 
let onesPlace = num % 10;
console.log(`1. thousands place is ${thousandsPlace}\n`);
console.log(`2. hundreds place is ${hundredsPlace}\n`);
console.log(`3. tens place is ${tensPlace}\n`);
console.log(`4. ones place is ${onesPlace}\n`);

console.log("LAUNCH SCHOOL SOLUTION\n")
// LAUNCH SCHOOL SOLUTION


let num1 = 4936;

let ones = 4936 % 10;

num1 = (num1 - ones) / 10;

let tens = num1 % 10;

num1 = (num1 - tens) / 10;

let hundreds = num1 % 10;

num1 = (num1 - hundreds);

let thousands = num1 / 10;


console.log(`1. thousands place is ${thousands}\n`);
console.log(`2. hundreds place is ${hundreds}\n`);
console.log(`3. tens place is ${tens}\n`);
console.log(`4. ones place is ${ones}\n`);



