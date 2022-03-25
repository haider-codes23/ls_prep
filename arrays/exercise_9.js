let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkArray (array, numberToBeFound) {
  console.log(array.includes(numberToBeFound));
}

checkArray(numbers1, 3);
checkArray(numbers2, 3);
checkArray(numbers3, 3);
