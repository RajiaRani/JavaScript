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


//Example 4
let day = "monday";
let time = 8; //night time
if( day === "sunday" && time === 8){
    console.log("Today is holiday we will arrange the party in the night.");
} else{
    console.log("Sorry, today is working day ...We are not free for the party.")
}


//Example 5
let attedence = 65;
if(attedence >= 75 && attedence <= 95){
    console.log("You are eligible for the exam.");
    console.log("You got the extra 5 marks.");
} else{
    console.log("You are not eligible for the exam because your attendence is short.");
}