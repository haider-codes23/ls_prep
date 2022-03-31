let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj['qux'] = 3;
console.log(myObj);

// cose snippet 1
let objKeys = Object.keys(myObj); // this returns an array of keys of the Object myObj
objKeys.forEach(function(key) { // we take that array and iterate over each of its values whilst loging them to the console
  console.log(key); 
});

// code snippet 2
for (let key in myObj) { // here the variable key in each iteration reveives a key from the object myObj
  console.log(key); // here those received keys are logged to the console
}