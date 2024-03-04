let fruits = ['Apple', 'Banana', 'Orange'];
let removeIndex = fruits.indexOf('Banana'); // Get index of 'Banana'
if (removeIndex !== -1) {
    fruits.splice(removeIndex, 1); // Remove 'Banana'
}
console.log(fruits); // Output: ['Apple', 'Orange']
