let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
function evenValues (array) {
  for (let index = 0; index < myArray.length; index++) {
    if (myArray[index] % 2 === 0) {
      console.log(`${myArray[index]} is an even number`);
    }
  }
}

evenValues(myArray);