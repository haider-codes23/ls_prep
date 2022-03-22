let names = ['Ibraheem' ,'Yusuf', 'Haider', 'Naveed'];
let namesInUpperCase = [];

for (let index = 0;index < names.length; index++) {
  if (names[index] === 'Naveed') {
    continue;
  }
  
  let upperCaseName = names[index].toUpperCase();
  namesInUpperCase.push(upperCaseName);
}

console.log(namesInUpperCase);