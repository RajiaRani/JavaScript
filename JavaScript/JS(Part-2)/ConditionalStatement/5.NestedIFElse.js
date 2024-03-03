//Example 1
let marks = 70;
if (marks >= 33) {
    console.log("Pass");
    if (marks >= 80) {
        console.log("Grade : O");
    } else if (marks >= 75) {
        console.log("Grade : A");
    } else if (marks >= 70) {
        console.log("Grade : B");
    } else {
        console.log("Grade : C")
    }
} else {
    console.log("Better luck for next time");
}

//Example 2
let age = 20;
if (age >= 18) {
    console.log("You are eligible");
    if (age >= 21) {
        console.log("you have a right to get marry");
    } else if (age >= 19) {
        console.log("You can Vote");
    } else {
        console.log("According to law you are under age, then you cant get marry under 21. ");
    }

} else {
    console.log("You are under age");
}

//Example 3
let weather = "cold";
let timeOfDay = 18; // 24-hour format
let isRaining = true;

if (weather === "cold") {
    console.log("Wear a jacket.");

    if (isRaining) {
        console.log("Don't forget an umbrella!");
    }
} else if (weather === "warm") {
    if (timeOfDay < 19) {
        console.log("A t-shirt should be fine.");
    } else {
        console.log("It's warm, but you might need a light sweater in the evening.");
    }
} else {
    console.log("Weather condition unknown. Dress comfortably.");
}


//Example 4
attedence = 78;
if (attedence >= 75) {
    console.log("You are eligible to attend the exam");
    if (attedence >= 95) {
        console.log("You got the extra 5 marks");
    } else {
        console.log("You got the 2 marks");
    }
} else {
    console.log("Sorry! your attend is too short");
}

//Example 5
let score = 88;
if (score >= 50) {
    console.log("Pass");
    if (score >= 95) {
        console.log("A+");
    } else if (score >= 80) {
        console.log("B");
        if (score >= 85) {
            console.log("B+");
        } else {
            console.log("B-");
        }
    } else if (score >= 70) {
        console.log("C");
        if (score >= 75) {
            console.log("C+");
        } else {
            console.log("C-");
        }
    } else if (score >= 60) {
        console.log("D");
        if (score >= 65) {
            console.log("D+");
        } else {
            console.log("D-");
        }
    }
}
else {
    console.log("F");
}


//Example 6
let Weather = "sunny";
let temperature = 25; // Celsius

if (Weather === "sunny") {
    if (temperature > 30) {
        console.log("It's really hot outside, let's go swimming!");
    } else if (temperature > 20) {
        console.log("Perfect weather for a picnic!");
    } else {
        console.log("It's sunny but chilly, maybe a brisk walk?");
    }
} else if (Weather === "rainy") {
    console.log("Let's stay in and watch a movie.");
} else {
    console.log("Let's see what the day brings.");
}

