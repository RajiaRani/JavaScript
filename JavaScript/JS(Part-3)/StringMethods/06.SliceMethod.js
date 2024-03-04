// Slice Method:
// Returns a part of the original string as a new String.

let str = "ILoveCoding";
let newStr = str.slice(1,5); // passing the starting index and (ending index+1)
console.log(newStr);


let str2 = "I love my India";
let newStr2 = str2.slice(5);
console.log(newStr2);
console.log(str2.slice(0,9));
console.log(str2.slice(10));
console.log(str2.slice(str2.length-2));
console.log(str2.slice(-2));

