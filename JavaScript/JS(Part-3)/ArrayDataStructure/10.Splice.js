// Splice Method:
// Removes / replace / add elements in place.
// splice( start, deleteCount, item0, item1,.......,itemN)

// Example 1
let colors = [ 'red', 'green', 'orange', 'blue', 'pink', 'black', 'yellow'];
let removeColors = colors.splice(2);
console.log("Deleted colors : ", removeColors);
console.log("After deletion original array is : ", colors);

// Example 2
let name = ['Heema', 'Rohit', 'Rajni', 'Meenu','Deepu'];
let deleteName = name.splice(0,2);
console.log("Deleted Name is : ", deleteName);
console.log("After deletion original array is : ", name);

// Example 3
let names = ['Heema', 'Rohit', 'Rajni', 'Meenu','Deepu'];
let deleteNames = names.splice(1,2, 'Chenchu Reddy', 'Roma Syal','Reetu Kumari');
console.log("Deleted Name is : ", deleteNames);
console.log("After deletion original array is : ", names);


// Example 4
let city = ['jalandhar', 'goa', 'delhi'];
let newCity = city.splice(0,0,'hyderbad', 'mumbai', 'patna');
console.log(city);


// Example 5
let marks = [90.8, 78, 56.6, 77, 89];
let addMarks = marks.splice(1,0,78.9, 67.8, 56,2);
console.log(marks);


// Example 6
let subjects = ['hindi', 'english', 'math', 'computer'];
subjects.splice(1, 1, 'Chemistry'); // replace english with chemistry
console.log(subjects);

