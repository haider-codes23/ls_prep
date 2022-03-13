// to find the data type we use the typeOf operator 
let type1 = typeof 'true';
console.log(type1);
let type2 = typeof false;
let type3 = typeof 1.5;
let type4 = typeof 2;
let type5 = typeof undefined;
let type6 = typeof {foo: 'bar'};

console.log(`"true" is the type ${type1}\n`);
console.log(`false is the type ${type2}\n`);
console.log(`1.5 is the type ${type3}\n`);
console.log(`2 is the type ${type4}\n`);
console.log(`undefined is the type ${type5}\n`);
console.log(`{foo: 'bar'} is the type ${type6}\n`);