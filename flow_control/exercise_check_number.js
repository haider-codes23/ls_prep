function numberRange(randomNumber) {
  if (randomNumber >= 0 && randomNumber <= 50){
    console.log(`${randomNumber} is between 0 and 50`);
  }else if (randomNumber >= 51 && randomNumber <= 100) {
    console.log(`${randomNumber} is between 51 and 100`);
  }else if (randomNumber > 100) {
    console.log(`${randomNumber} is greater than 100`);
  }else if (randomNumber < 0) {
    console.log(`${randomNumber} is less than zero`);
  }
}
numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);