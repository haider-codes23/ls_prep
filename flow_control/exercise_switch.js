function barCodeScanner(serial) {
  switch (serial) {
    case '123':               
      console.log('product1');
    case '113':
      console.log('product2');
    case '142':
      console.log('product3');
    default: console.log('Product not found!');  
  }
}

barCodeScanner('113');
// switch statement compares the value of serial that is provided to it against multiple case clause
// it comapres the value with the first case clause it does not match so it moves on to the next case 
// it compares the serial's value with the next case clause and it matches, then it executes
// the statement associated with it. Because there is no break statment the execution falls-through to the next case clause
// that leads to executing multiple case clauses till it encouter a break statement 