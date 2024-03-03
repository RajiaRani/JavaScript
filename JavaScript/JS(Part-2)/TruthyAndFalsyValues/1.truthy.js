// EveryThing in JavaScript is true or false (in boolean Context).
// This doesn't mean their value itself is false or true, but they are treated as false or true if taken in boolen context.

// Truthy Values
if(true){
    console.log("it has true value");
} else{
    console.log("it has false value");
}


// Example 2
if("india"){
    console.log("it has true value");
} else{
    console.log("it has false value");
}


// Example 3
let string = "  ";
if(string){
    console.log("string is not empty");
} else{
    console.log("string is empty");
}

// Example 4
let num = 10;
if(num){
    console.log("num is not equal to Zero");
} else{
    console.log("num is equal to Zero");
}


// Example 5
let username = "";
if (username) {
    console.log("Username exists");
} else {
    console.log("Username is required");
}
// Output: Username is required


// Example 6 : Logical AND (&&) Short-circuiting
let greeting = "Hello" && "everyone";
console.log(greeting); //since both "Hello" and "World" are truthy, it returns "World".

let response = 0 && "Reply";
console.log(response); // 0 is falsy, so it returns 0.


// Example 7 : Logical OR (||) Short-circuiting
let defaultColor = undefined || "blue";
console.log(defaultColor);// Output: blue

let userColor = "red" || "blue";
console.log(userColor);// Output: red
