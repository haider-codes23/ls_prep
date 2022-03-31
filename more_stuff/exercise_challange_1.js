function detectNegativeZero (value) {
  return (1 / value === -Infinity);
}
console.log(detectNegativeZero(4));
console.log(detectNegativeZero(-0));
console.log(detectNegativeZero(4));
