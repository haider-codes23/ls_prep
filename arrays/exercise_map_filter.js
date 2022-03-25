let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  let oddLengthElements = array.filter(element => element.length % 2 !== 0);
  return oddLengthElements.map(string => string.length);
}

console.log(oddLengths(arr)); // => [1, 5, 3]