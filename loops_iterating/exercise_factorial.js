function factorial (randomNumber) {

  let product = 1;

  for (let index = 1; index <= randomNumber; index++) {

    product *= index;
  }

  return product;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
