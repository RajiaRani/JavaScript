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



//Example 4
let day = "sunday";
let time = 8;
if( day === "monday" || time === 8){
    console.log("Lets do party");
} else{
    console.log("Today is working day");
}


// Example 5
let num = 12;
if((num%3 == 0) && ( (num+1 == 15) || ( num -1 == 11))){
    console.log("safe");
} else {
    console.log("unsafe");
}