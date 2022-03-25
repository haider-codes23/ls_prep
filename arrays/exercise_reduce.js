let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];


function oddLengths (array) {
  return array.reduce((filteredNumberdArray, string) => {
    let length = string.length;
    if(length % 2 !== 0) {
      filteredNumberdArray.push(length);
    }
    return filteredNumberdArray;
  },[]);
}

console.log(oddLengths(arr));