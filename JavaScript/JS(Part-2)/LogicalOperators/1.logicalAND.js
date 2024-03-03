// 1. Logical AND (&&)
// The && operator returns true if both operands are true, and false otherwise. 
// It's useful for checking if multiple conditions are true at the same time.

//Example 1
let a = 5;
let b = 10;
// Check if a is greater than 0 AND b is greater than 0
if (a > 0 && b > 0) {
    console.log("Both a and b are greater than 0");
} else {
    console.log("At least one of a or b is not greater than 0");
}

//Example 2
let age = 20;
let gender = "male";
if( age >18 && gender === "female"){
    console.log("You are allowed");
} else{
    console.log("Sorry, you cant entered.This is only for women whos age is above 18. ")
}

//Example 3
let marks = 67;
let garde = "C";
if ( marks >= 95 && grade === "O"){
    console.log("Congraulations!!! you got the FIRST position with marks above 95 and Grade 'O'.")
} else{
    console.log("You just PASS with 'C' grade.")
}
 