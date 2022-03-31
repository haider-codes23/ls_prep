function isNotANumber (value) {
  return value !== value;
}

console.log(isNotANumber('haider'));
console.log(isNotANumber(23));
console.log(isNotANumber(NaN));
