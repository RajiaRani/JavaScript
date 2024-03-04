// Slice = returns copies of the original array.

let colors = [ 'red', 'green', 'orange', 'blue', 'pink', 'black', 'yellow'];
let newColors = colors.slice(3);
console.log(newColors);
console.log(colors.slice()); // print the original array
console.log(colors.slice(2,4));
console.log(colors.slice(-3));