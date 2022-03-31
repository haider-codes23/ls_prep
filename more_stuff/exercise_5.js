function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}
// The argumnet(String) we pass to the function is operated on by the String method slipt()
// which returns an array of strings which later is operated on by the array reverse()
// method which return a revered array . Then we use the reversed array to map or tranform that array into a
// a new array containing the lenghts of the string. Then this new array is returned to the 
// source from where the function was called 