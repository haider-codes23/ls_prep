function evenOrOdd(randomNumber) {
  if (Number.isInteger(randomNumber)) {
    let result = (randomNumber % 2 === 0) ? `${randomNumber} is an even number` : `${randomNumber} is an odd number`;
    console.log(result);
  }else {
    console.log("The Argument provided to the function is not a Number");
  }
  
}

evenOrOdd(23);
evenOrOdd("Hello, Haider");
evenOrOdd(undefined);
