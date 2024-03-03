// The most commonly used conditional statements are if, else if, else, and switch.

// 1. if Statement
// The if statement is used to execute a block of code only if a specified condition is true.

// if( some condition) {
    //DO SOMETHING  }

//Example 
console.log("before my if statement");
let Age = 23;
if(Age >= 18){
    console.log("You can vote");
    console.log("You can drive");
    let a = 3;
    console.log(a*5);
}
if(Age < 18){
    console.log("you cant vote");
    console.log("you cant drive");
}
console.log("after if statement");




//Example 1
let score = 75;
if(score > 70){
    console.log("You passed the exam!");
}

//Example 2
let age = 19;
if(age > 18){
    console.log("You are eligible to give the vote");
}

//Example 3
let bank_balance = 2000;
if(bank_balance < 2100){
    console.log("Your bank balance is less than 2100 , so we have to  charge the extra fine.");
}

//Example 4
let weight = 75;
if(weight > 70){
    console.log("Manitaine your weight");
}


//Example 5
let firstName = "rajia";
if(firstName == "rajia"){
    console.log(`Welcome ${firstName}`);
}

