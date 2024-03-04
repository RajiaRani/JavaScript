// Splice Method:
// Removes / replace / add elements in place.
// splice( start, deleteCount, item0, item1,.......,itemN)

// Example 1
let colors = [ 'red', 'green', 'orange', 'blue', 'pink', 'black', 'yellow'];
let removeColors = colors.splice(2);
console.log("Deleted colors : ", removeColors);
console.log("After deletion original array is : ", colors);

// Example 2
let name = ['Heema', 'Rohit', 'Rajni', 'Meenu','Deepu'];
let deleteName = name.splice(0,2);
console.log("Deleted Name is : ", deleteName);
console.log("After deletion original array is : ", name);


