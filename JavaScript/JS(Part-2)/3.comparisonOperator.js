//Comparison operators in JavaScript are used to compare two values and return a boolean value, either true or false,
// based on whether the comparison is true. 


// 1. Equal (==)
// Compares two values for equality after converting both values to a common type (type coercion).
let age = 18 ;
console.log(age == 18); 

//Example 2
let x = 45;
let y = 45;
console.log( "Is x equal to y :", x == y);


// 2. Not equal (!=)
// Checks if two values are not equal, after type coercion.
let age1 = 18;
console.log(age1!=19);


// 3. Strict equal (===)
// Compares both the value and the type, which means no type conversion is performed.
let age2 = 23;
console.log(age2 === 24);

// 4. Strict not equal (!==)
// Checks if two values are not equal, or their types are different.
let price = 56;
console.log(price !== 20);


// 5. Greater than (>)
// Checks if the value on the left is greater than the value on the right.
let student = 45;
console.log(student > 56);


// 6. Greater than or equal to (>=)
// Checks if the value on the left is greater than or equal to the value on the right.
let students = 78;
console.log( students>=78 );


// 7. Less than (<)
// Checks if the value on the left is less than the value on the right.
let count = 77;
console.log(count<77);


// 8. Less than or equal to (<=)
// Checks if the value on the left is less than or equal to the value on the right.
let count1 = 56;
console.log(count1<=56);
