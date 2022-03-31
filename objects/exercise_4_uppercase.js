let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let myArray = Object.keys(obj);
console.log(myArray);

let upperCaseKeys = myArray.map(keys => keys.toUpperCase());

console.log(upperCaseKeys);