let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

function replace(array) {
  for (let indexI = 0; indexI < array.length; indexI++) {
    for (let indexJ = 0; indexJ < array[indexI].length; indexJ++) {
      if (array[indexI][indexJ] === 6) {
        array[indexI][indexJ] = 606;
      }
    } 
  }
}

replace(arr);
console.log(arr);
