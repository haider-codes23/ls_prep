{
  let foo = 'bar';
}
console.log(foo); 
// we get a Reference Error that foo is not defined. Although it is defined but 
// inside a block thus the scope of foo variable is not accessible outside the block when we try to 
// log it the console
