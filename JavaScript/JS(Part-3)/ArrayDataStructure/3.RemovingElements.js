// Example 1
let fruits = ['Apple', 'Banana', 'Orange'];
fruits.pop(); // Removes "Orange" from the end
fruits.shift(); // Removes "Apple" from the beginning
console.log(fruits);


// Example 2
let studentNames = ["Rajia", "Chenchu Reddy", "Heema", "Neha Sharma", "Shiva Reddy"];
let len = studentNames.length;
if( len > 3){
    studentNames.pop();
    console.log("Final Array : ", studentNames);
} else {
    console.log("No space");
}
