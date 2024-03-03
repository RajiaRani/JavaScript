// Qs.1 Create a number variable num with some value. Now, print "good" if the number divisible by 10 and print "bad" if it is not?
let num = 22;
if( num%10 == 0 ){
    console.log("Good");
} else{
    console.log("Bad");
}


// Qs.2: A string is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5.
// For a given string print if it is golden or not.
let string = "Army is the pride of every country.";
if( (string[0] === "A" || string[0] === "a") && (string.length > 5)){
    console.log("String is Golden");
} else{
    console.log("String is not Golden");
}


// Qs. 3: write a program to find the largest of 3 numbers.
let num1 = 50;
let num2 = 18;
let num3 = 15;
if(num1 > num2){
    if(num1 > num3){
        console.log(`${num1} is largest`);
    } else{
        console.log(`${num3} is largest`);
    }
} else{
    if( num2 > num3){
        console.log(`${num2} is largest`);
    }
    else{
        console.log(`${num3} is largest`);
    }
}


// Qs.4 : (Bonus). Write a program to check if 2 numbers have the same last digit.
let number1 = 32;
let number2 = 123451;
if((number1%10) == (number2%10)){
    console.log("numbers have the same last digit which is ", number1%10);
} else{
    console.log("numbers don't have the same last digit. ");
}


