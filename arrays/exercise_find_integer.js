let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers (array) {

  let integerArray = [];

  for (let index = 0; index < array.length; index++) {
    if (Number.isInteger(array[index])) {
      integerArray.push(array[index]);
    }
  }
  return integerArray;
}

findIntegers(things);




let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
 