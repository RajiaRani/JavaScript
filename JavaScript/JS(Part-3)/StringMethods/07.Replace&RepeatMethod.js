// Replace
// Searches a value in the string and returns a new string with the value replaced.


// Example 1
let str = " i love coding";
let newStr = str.replace("love", "do");
console.log("After replaced: ", newStr);

// Example 2
let str2 = "i hate coding";
let newStr2 = str2.replace("coding", "chemistry");
console.log("After replaced: ", newStr2);

// Example 3
let str3 = " i am rajia rani";
let newStr3 = str3.replace("i", "I");
console.log("After replaced: ", newStr3);


// Example 3
let msg = " i love coding , coding,  maths";
let newMsg = msg.replace("coding", "science");
console.log("After replaced: ", newMsg);


// Repeat Method:
// Returns a string with the number of copies of a string.

// Example 1
let fruitName = "mongo ";
console.log(fruitName.repeat(5));