let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4; 
console.log(array2); 
// It logs the array [1, 4, 3] to the console
// when you assign a variable that references an object to another variable, instead of copying
// the object, js only copies the pointer. Thus when we intialize array2 with array1 instead of
// copying the object js only copies the pointer. Thus when we initialize array2 with array1
// we're making both array1 and array2 point to the same array.
// Afterwards when we change the value at index 1 of array1 we are changing the same array that 
// array2 is pointing at


 

