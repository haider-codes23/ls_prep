let names = ['Haider', 'Ibraheem', 'Yusuf'];
let namesInUpperCase = [];

let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  namesInUpperCase.push(upperCaseName);
  index++;

}
console.log(namesInUpperCase);