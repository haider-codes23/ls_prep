let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];


let evenOrOdd = myArray.map(function (number) {
  if (number % 2 === 0) {
    return 'even';
  }else if (number % 2 !== 0) {
    return 'odd';
  }
});

console.log(evenOrOdd);