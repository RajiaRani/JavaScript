// Qs. A "good string" is a string that starts with the letter 'a' & has a length>3. 
// write a program to find if a string is good or not.

let string = "apple";
let len = string.length;
if( string[0] === 'a' && len > 3){
    console.log("String is Good");
} else{
    console.log("string is bad");
}
