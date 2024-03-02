//Number:  Unlike other programming languages, you don’t need int, float, etc to declare different numeric values.
// You can defined any numbers here.
//In which can handle both INTEGER and Floating-point (decimal) values.

//Note: you can apply any method on any numbers.
let number1 = 45;
let number2 = 4545;
let sum = number1+number2;
let div = number2/number1;
let multi = number1*number2;
console.log(`Sum = ` + sum);
console.log(`Multiplication = ` + multi);
console.log(`Division = ` + div);
//Note you can also use the function or method dirctly in the console
console.log(`Modulo is = ` + number1%number2);


// Example 2
let x = 89;
let y = 77;
let divideByTwo = (x+y)/2;
console.log(divideByTwo);

//Example 3
let num = 123;
console.log(num.toString()); // "123"

// Fixed-point notation (string representation)
console.log(num.toFixed(2)); // "123.00"


// Exponential notation (string representation)
console.log(num.toExponential()); // "1.23e+2"

// Precision (string representation, in either fixed or exponential form, depending on the number)
console.log(num.toPrecision(3)); // "123"

// Parsing a string to float
let floatString = "3.14";
console.log(parseFloat(floatString)); // 3.14

// Parsing a string to integer
let intString = "100";
console.log(parseInt(intString)); // 100

// Checking if a value is finite
console.log(isFinite(num)); // true

// Checking if a value is NaN
console.log(isNaN(num)); // false

// Maximum value in a list of numbers
console.log(Math.max(1, 2, 3, num)); // 123

// Minimum value in a list of numbers
console.log(Math.min(1, 2, 3, num)); // 1

// Square root
console.log(Math.sqrt(144)); // 12

