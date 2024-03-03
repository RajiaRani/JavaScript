//Template literals are enclosed by the backtick (`) character instead of the traditional single (' ') or double (" ") quotes.
// Within these literals, you can include placeholders for the interpolation of variables, expressions, or any valid JavaScript code. 
//These placeholders are indicated by the dollar sign and curly braces `${expression}`.

//Example 1
let penPrice = 56;
let pencilPrice = 10;
let totalPrice = ` The total price  =  ${penPrice + pencilPrice} Rupees.`;
console.log(totalPrice);

//Example 2
let multiLineString = `This is a string that spans multiple lines without needing to use the + operator or special characters like \n.`;
console.log(multiLineString);


//Example 3
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice!

//Example 4
let price = 10;
let taxRate = 0.05;
let total = `Total: $${price * (1 + taxRate)}`;
console.log(total); // Output: Total: $10.5

