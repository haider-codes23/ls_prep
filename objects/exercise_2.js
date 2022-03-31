let myObj = {
  1 : 'This is Number One',
  '1' : 'This is the string One',
  undefined : 'This has not been defined yet',
  'hello world' : "This is also a string",
  true : 'Its key is a boolean value',
  'true' : "Its a string 'true'",

}
console.log(Object.values(myObj));