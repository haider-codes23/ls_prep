let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

let names = ['Ahsan Ali', 'Mohmmad Ali', 'Hasnain Ali', 'Haider Ali', 'Qasim Ali'];
console.log(allMatches(names, /Ali/));

function allMatches (array,regex) { 
  let matchedStringsArray = [];
  for (let string of array) {
    console.log(`${string}`);
    if (regex.test(string)) {
      console.log(regex.test(string));
      console.log('-------')
      matchedStringsArray.push(string);
    }else {console.log('false');console.log('-------')};
  }
  return matchedStringsArray;
}

console.log(allMatches(words, /lab/));




