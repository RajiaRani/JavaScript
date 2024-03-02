
//Pre - Increment (Change, then use)
// Post - Increment (Use, then Change)

//Example 1
let e = 5;
console.log(" PreIncrement = ",++e); // Output: 6 (prefix increments then returns the value)
let f = 5;
console.log("PostIncrement = ",f++); // Output: 5 (postfix returns the value then increments)
console.log(f); // Output: 6

//Exapmle 2
let year = 2024;
console.log("First increment = ", ++year);


//Example 3
let age = 23;
console.log("Post increment = ", age++);
console.log(age);
console.log("Pre increment = ", ++age);