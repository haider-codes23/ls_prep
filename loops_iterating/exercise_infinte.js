let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
// The problem with this code is that in the place of the conditional expression we are assigning a new value to 
// to the counter variable. Then couter is evaluated which has a value of equal to 1 which is a 
// truty value. The loop body is executed, counter's value is incremented, if's condional expresssion
// is evaluated to false and control goes back to the while's conditional expression where counter
// is again assigned the value 1. The conditional expression is true 