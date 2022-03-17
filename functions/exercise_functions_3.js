function scream(words) {
  words = words + '!!!!';
  return words;
  console.log(words);
}
scream('Yipeee');

// This program will log nothing to the console becasue the function scream() return nothing 
// and the console.log() statement is written after the returns to where it was called from.