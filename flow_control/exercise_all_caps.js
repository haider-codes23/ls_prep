function allCaps(toAllCaps) {
  let captitalizedVersion;
  if (toAllCaps.length > 10) {
    captitalizedVersion = toAllCaps.toUpperCase();
    return captitalizedVersion;
  } else {
    return toAllCaps;
  }
  
}

console.log(allCaps('Hello world'));
console.log(allCaps('goodbye'));