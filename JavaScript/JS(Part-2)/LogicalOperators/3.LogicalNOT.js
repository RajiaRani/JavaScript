// 3. Logical NOT (!)
// The ! operator reverses the boolean value of its operand. 
// If the operand is true, it returns false, and if the operand is false, it returns true. It's used to negate a condition.

//Example 1
let isWeekend = false;
// Check if it's NOT the weekend
if (!isWeekend) {
    console.log("It's a weekday.");
} else {
    console.log("It's the weekend.");
}


// Example 2
let isPresent = true;
if(!isPresent){
    console.log("Absent");
} else {
    console.log("Present");
}


// Example 3
let marks = 75 ;
let pass = true;
if ( marks >= 75 && pass ){
    console.log("Pass");
} else {
    console.log("Fail");
}