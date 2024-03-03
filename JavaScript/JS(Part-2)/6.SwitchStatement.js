// Switch Statement: Used when we have some fixed values that we need to compare to.

// Example : 1
let day = new Date().getDay();
let dayName;
switch (day) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Unknown";
}
console.log(`Today is ${dayName}.`);


// Example : 2
let color = "red";
switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Go");
        break;
    case "yelloe":
        console.log("Slow down");
        break;
    default:
        console.log("Broken Light");
}

// Example 3: Switch with Multiple Cases Sharing the Same Code Block
let fruit = "watermelon";
switch (fruit) {
    case "mango":
    case "apple":
    case "grapes":
    case "banana":
        console.log(`${fruit} is sweet.`);
        break;
    case "lemon":
    case "lime":
        console.log(`${fruit} is sour`);
        break;
    default:
        console.log("Unknown fruit");
}


// Example 4: Switch without Break (Fall-through)
let number = 4;
switch (number) {
    case 1:
        console.log('One');
    // Notice there's no break statement here
    case 2:
        console.log('Two');
    case 3:
        console.log('Three');
        break;
    case 4:
        console.log('Four');
        break;
    default:
        console.log('Unknown number.');
}


// Example 5: Switch with Expression
let x = 5;
let y = 4;
switch (true) {
    case (x + y === 8):
        console.log(`Sum of ${x} + ${y} = ${x + y}`);
        break;
    case (x - y === 1):
        console.log(`The difference of ${x} - ${y} = ${x-y}`);
        break;
    default:
        console.log('No special numbers.');
}

