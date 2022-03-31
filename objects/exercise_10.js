let myArray = [1, 2, ["a", ["b", false]], null, {}];
for (let index = 0; index < myArray.length; index++) {
  console.log(typeof(myArray[index]));
}
// 1 is a number
// 2 is a numner
// ["a", ["b", false]] is an object
// null is an object
// {} is an empty object