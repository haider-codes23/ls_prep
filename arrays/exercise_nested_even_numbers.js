let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

function evenValues (array) {
  
  for (let index1 = 0; index1 < myArray.length; index1++) {
    for (let index2 = 0; index2 < myArray[index1].length; index2++) {
      if (array[index1][index2] % 2 === 0) {
        console.log(`${array[index1][index2]} is an even number`);
      }
  }
}
}
evenValues(myArray);
