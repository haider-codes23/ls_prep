function compareArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let index = 0; index < arr1.length; index++) {

    if (arr1[index] !== arr2[index]) {
      return false;
    }

  }
   
  return true;
}

let a = [1, 2];
let b = [1, 2, 3];
console.log(compareArray(a, b));