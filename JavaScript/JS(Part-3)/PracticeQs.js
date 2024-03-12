// Qs. 1
// Created a nested array to show tic-tac game state?
let tictacArr = [ ['X','null','O'], ['null','X','null'], ['O','null','X']];
console.log(tictacArr[0]);
console.log(tictacArr[1]);
console.log(tictacArr[2]);
tictacArr[0][1] = 'O';
console.log(tictacArr);


// Example 2
// Write a JS program to get the first n elements of an array .[n can be any positive number ].
let arr = [ 1, 3, 5, -9, 7, 11, -23];
let n = 3;
let ans = arr.slice(0,n);
console.log(ans);
// for (let i=0;i<n;i++){
//     console.log(arr[i]);
// }


// Example 3
// Write a JS program to get the last n elements of an array .[n can be any positive number ].
let arr1 = [ 1, 3, 5, -9, 7, 11, -23];
let n1 = 3;
let ans1 = arr.slice(arr1.length - n);
console.log(ans1);


// Example 4
// Write a JS program to  check whether a string is blank or not.?
// let str = prompt("please enter a string");
// if ( str.length == 0) {
//     console.log("string is empty");
// } else {
//     console.assert.log("string is not empty.")
// }



// Example 5
// Write a JS program to test whether the character all the given (character) index is lower case.
let str2 = "helloiamRajiaRani";
let index = 9;
if(str2[index] == str2[index].toLowerCase()){
    console.log("character is lower");
} else{
    console.log("character NOT is lower");
}


//Example 6
// Write a JS program to strip leading and trailing spaces from a string.
 let str = prompt("enter your string");
console.log(`original string = ${str}`);
 console.log(`string without spaces = ${str.trim()}`);


// Example 7
// Write a JS program to check if an element exists in an array or not. ?
let Arr = ['hello', 1, 4, 6, 89, 'rani', 'a'];
let elt = 4;
if(Arr.indexOf(elt) != -1){
    console.log("element exists in array");
} else{
    console.log("element is NOT exists in array");
}