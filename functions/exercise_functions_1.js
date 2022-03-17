
let bar = 1; // This bar variable has global scope 
function foo() {
  let bar = 2; // This bar variable has local scope with the function definition
}

foo(); // when foo is called it intializes another bar variable within the local scope of the function
console.log(bar); // the variable that console log is global not local 
