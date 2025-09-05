// Delete an element from the array
console.log("Delete an element from the array");
let  arrDelete = ["I", "go", "home"];
console.log(`Initial array: [${arrDelete}]`);
console.log(`Deleting the middle item: '${arrDelete[1]}'`);
delete arrDelete[1];
console.log(`Array after deletion: ${arrDelete}`);
console.log(`The deleted element is: ${arrDelete[1]} (no longer exists!)`);
console.log(`Array length: ${arrDelete.length}`);
console.log("");


// The splice method
console.log("The splice method");
let arrSplice = ["I", "study", "JavaScript", "right", "now"];
console.log(`Initial array: ${arrSplice}`);
let spliceReturn = arrSplice.splice(0, 3, "Let's", "Dance");
console.log(`Spliced method return: ${spliceReturn}`)
console.log(`Spliced array: ${arrSplice}`);
console.log("");


// Slice
console.log("The slice method");
let  arrSlice = ["t", "e", "s", "t"];
console.log(`Initial array: [${arrSlice}]`);
console.log(`Sliced array from 1 to 3: [${arrSlice.slice(1,3)}]`);
console.log("");

// Concat
console.log("The concat method");
let  arrConcat = [1, 2];
console.log(`Initial array: ${arrConcat}`);
console.log(`Concat array: ${arrConcat.concat([3,4])}`);
console.log("");

// Iterate forEach
console.log("The forEach method");
let arrMiscrits = ["Charpy", "Wolly"];
arrMiscrits.forEach((item, index) => {
  console.log(`Item: ${item}, Index: ${index}`);
});
console.log("");

// The indexOf method 
console.log("The indexOf method");
let arrIndexOf = [1, 0, false];
console.log(`Initial array: ${arrIndexOf}`);
console.log(`Index of '0': ${arrIndexOf.indexOf(0)}`);
console.log(`Index of 'false': ${arrIndexOf.indexOf(false)}`);
console.log(`Index of 'null': ${arrIndexOf.indexOf(null)}`);
console.log(`Index of '1': ${arrIndexOf.indexOf(1)}`);
console.log(`Last index of '0': ${arrIndexOf.indexOf(0)}`);
console.log("");

// The last index of function
let arrLastIndexOf = ["Apple", "Orange", "Apple"];
console.log("The lastIndexOf method");
console.log(`Initial array: [${arrLastIndexOf}]`);
console.log(`Index of 'Apple': ${arrLastIndexOf.indexOf("Apple")}`);
console.log(`LastIndexOf of 'Apple': ${arrLastIndexOf.lastIndexOf("Apple")}`);
console.log("");

// The includes method handles NaN correctly
console.log("The includes method handles NaN correctly");
const arrIncludes = [NaN];
console.log(`Index of 'NaN': ${arrIncludes.indexOf(NaN)}`);
console.log(`Index of 'NaN' using includes: ${arrIncludes.includes(NaN)}`);
console.log("");

// The findIndex method
console.log("The findIndex method");
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];
let user = users.find(item => item.id ==1);
console.log(`The users map: ${users.forEach(
  (user, index) => console.log(user, index))}`
);
console.log(`The user with id 1: ${user.name}`);
console.log("");

// The findLastIndex method
console.log("The findLastIndex method");
console.log(`The index of the last John: ${
  users.findLastIndex(user => user.name == "John")}`
);
console.log("");

// Filter
console.log("The filter method");
let filteredUsers = users.filter(user => user.id < 3);
console.log(`Filtered users with id < 3: ${
  filteredUsers.forEach(user => console.log(user))}`
);
console.log("");

// Map
console.log("The map function");
let dishes = ["Pho", "Bun"];
let lengths = dishes.map(
  dish => dish.length
);
console.log(`Initial food array: [${dishes}]`);
console.log(`The mapped length array: [${lengths}]`);
console.log("");

// The sort(fn) function 
console.log("Sorted function");
let arrSort = [1, 2, 15];
console.log(`Initial array: [${arrSort}]`);
console.log(`Sorted array: [${arrSort.sort()}]`);
console.log("The items are sorted as strings by default");
console.log("");

// Own numeric sorting function
console.log("Sort with our own numeric compare function");
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a - b) return -1;
}
console.log(`Sorted array numerically: [${arrSort.sort(compareNumeric)}]`);
console.log("");

// Reverse
console.log("The reverse method");
let arrReversed = [1,2,3,4,5];
console.log(`Initial array: [${arrReversed}]`);
console.log(`Reversed array: [${arrReversed.reverse()}]`);
console.log("");

// Split
console.log("The split method");
let names = "Haerin, Minji, Harun";
let arrNames = names.split(", ", 2);
console.log(`Splitted array: [${arrNames}]`);
console.log("");

// Join
console.log("The join method");
console.log(`Initial array: [${arrNames}]`);
console.log(`Joined array with separator ';': '${arrNames.join(";")}'`);
console.log("");

// Reduce
console.log("The reduce method");
let arrReduced = [1,2,3,4,5];
let resultReduced = arrReduced.reduce(
  (sum, current) => sum + current, 0 
);
console.log(`Initial array: [${arrReduced}]`);
console.log(`The calculated sum using the reduce method: ${resultReduced}`);
console.log("");

// Array.isArray
console.log("Array.isArray");
console.log(`type of {}: ${typeof({})}`);
console.log(`type of []: ${typeof([])}`);
console.log(`Array.IsArray of {}: ${Array.isArray({})}`);
console.log(`Array.IsArray of []: ${Array.isArray([])}`);