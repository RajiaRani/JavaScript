// Falsy Values
// A value is considered falsy if it translates to false when evaluated in a boolean context. 
// There are exactly six falsy values in JavaScript:
// 1. false - The boolean false
// 2.  0 - The number zero
// 3. -0 - The negative zero
// 4. " " - An empty string
// 5. null
// 6. undefined
// 7. NaN - Not a Number


// Example 1
if(0){
    console.log("it has true value");
} else{
    console.log("it has false value");
}

// Example 2
if(""){
    console.log("it has true value");
} else{
    console.log("it has false value");
}

// Example 3
if(null){
    console.log("it has true value");
} else{
    console.log("it has false value");
}

// Example 4
if(undefined){
    console.log("it has true value");
} else{
    console.log("it has false value");
}

// Example 5
if(-0){
    console.log("it has true value");
} else{
    console.log("it has false value");
}

// Example 6
if(NaN){
    console.log("it has true value");
} else{
    console.log("it has false value");
}

// Example 7
if(false){
    console.log("it has true value");
} else{
    console.log("it has false value");
}