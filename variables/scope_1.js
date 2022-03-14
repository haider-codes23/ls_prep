let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
// It will print bar on the console becasue the variable foo defined inside the the block is not 
// accessible outside the 