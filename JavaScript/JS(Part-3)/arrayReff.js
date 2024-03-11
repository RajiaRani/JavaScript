let name = "rajia";
let name1 = "rajia";
console.log(name == name1); // return true
console.log(name1 === name1); // return true

// compare the array
let arr = [];
let arr1 = [];
console.log("Compare empty array " ,arr === arr1); //return false

// Example 2
let arr2 = [1,2,3,4];
let arr3 = [1,2,3,4];
console.log("Is arr2 & arr3 are equal : ", arr2 === arr3); // return false beacuse we compare their addres which is not same.

// Example 3
let arr4 = ['rajia', 'rani'];
let arrCopy = arr4;  // copy of the arr4 
console.log(arr4 === arrCopy);
arr4.push('chenchu');
console.log(arr4);
console.log(arrCopy);
if( arr4 === arrCopy){
    console.log("Both array are equal.")
} else{
    console.log("both array are not equal");
}


// Example 4
let Arr = ['apple', 'banana', 'mango'];
let newArr = ['apple', 'banana', 'mango'];
Arr.unshift('grapes'); // added grapes at first index
Arr.push('cherry'); // added cherry at the last index
console.log(Arr);
if( Arr === newArr){
    console.log("Array are equal with same address.");
} else{
    console.log("Array are NOT equal.");
}