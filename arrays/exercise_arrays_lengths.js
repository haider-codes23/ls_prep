let array1 = [1, 2, undefined, 4]; // Its length = 4

let array2 = [1]; // here array2's length is 1 but later its expanded to 5
array2.length = 5; // array2's length is 5, total of 5 elements of which last 4 are empty

let array3 = [];// here the length of the array3 is 0
array3[-1] = [1]; // here the length of the array3 is 0 because only index values count towards the length 
// of the array 

let array4 = [1, 2, 3, 4, 5]; // here the length is 5
array4.length = 3; // but here the length is decreased which means that the array will be truncated 
// js will remove all elements beyond the new final element and the new length of the array is 3

let array5 = []; // here the length of the array is 0 becasue the array is declared but not initialized
array5[100] = 3; // here the length of the array5 is 101

console.log(array1.length);
console.log(array2.length);
console.log(array3.length);
console.log(array4.length);
console.log(array5.length);