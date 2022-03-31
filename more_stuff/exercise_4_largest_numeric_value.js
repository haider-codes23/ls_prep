function largetNumericValue (arrayOfnumbers) {
  let temp = arrayOfnumbers[0];
  do {
    index = 1;
    temp = arrayOfnumbers[index] > temp ? arrayOfnumbers[index] : temp;
    index++;
  } while (index < arrayOfnumbers.length)
  
  return temp;
}

let array = [1,6,3,2];
let array1 = [-1,-6,-3,-2];
let array2 = [2,2];

console.log(largetNumericValue(array));
console.log(largetNumericValue(array1));
console.log(largetNumericValue(array2));