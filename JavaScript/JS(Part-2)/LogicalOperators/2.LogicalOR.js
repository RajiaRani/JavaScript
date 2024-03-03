// 2. Logical OR (||)
// The || operator returns true if at least one of the operands is true.
// If both operands are false, it returns false. It's used to check if any one of multiple conditions is true.


//Example 1
let age = 12;
let gender = "male";
if( age >= 21 || gender === "female"){
    console.log("You can marry");
} else{
    console.log("You cant marry");
}
 

// Example 2
let weather = "rainy";
let umbrella = false;

// Check if weather is sunny OR if you have an umbrella
if (weather === "sunny" || umbrella) {
    console.log("You can go outside without getting wet.");
} else {
    console.log("You might get wet because it's rainy and you have no umbrella.");
}


// Example 3
let marks = 89;
let garde = 'A';
if ( marks >= 90 || garde === 'A'){
    console.log("You got First division");
} else{
    console.log("You just PASS");
}

