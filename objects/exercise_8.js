function copyObj (objToCopy, arrayOfKeys = []) {
 let destinationObject = {};

 if(arrayOfKeys) {
   arrayOfKeys.forEach(function (arrayOfKeys) {
     destinationObject[arrayOfKeys] = objToCopy[arrayOfKeys];
   });
   return destinationObject;
 }else {
   return Object.assign(destinationObject, objToCopy);
 }
}

let person = { 
  name: 'Bob',
  age: 30,
  height: '6ft'
};


console.log(copyObj(person, ['name', 'age']));


