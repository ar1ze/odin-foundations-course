// Array declaration
let arrNew = new Array();
let arrBrackets = [];

console.log("Array declaration and access");
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log("");

// Mix values
console.log("Mixed values in the array");
let arrMixed = ["Apple", true];
console.log(arrMixed);
console.log("");

// Get last elemts with at
console.log("Get the last elements with at");
console.log(fruits[fruits.length - 1]);
console.log(fruits.at(-1));
console.log("");

// Pop/push works word the end of an array
console.log("pop/push");
let miscrits = ["Ignios", "Wolly", "Charpy"];
console.log("Miscrists");
console.log(miscrits);
console.log("pop")
console.log(miscrits.pop());
console.log(miscrits)
console.log("push 'Flue'");
console.log(miscrits.push("Flue"));
console.log(miscrits)
console.log("");

// shift/unshift works with the beginning of the array
console.log("shift/unshift");
console.log("shift");
console.log(miscrits.shift());
console.log(miscrits);
console.log("unshift 'Manio'");
console.log(miscrits.unshift("Manio"));
console.log(miscrits)

// Internals
console.log("Internals")
let food = ["Pho"];
let foodCopy = food;
console.log(`'food === foodCopy': ${food === foodCopy}`);
console.log("foodCopy push 'spring rolls'");
console.log(foodCopy.push("Spring Rolls"));
console.log("food array");
console.log(food);
console.log("foodCopy array");
console.log(foodCopy);
console.log("");

// Loops
 console.log("For loop arrays");
 for (let i = 0; i < miscrits.length; i++) {
  console.log(miscrits[i]);
 }
 console.log("");
 
 console.log("Shorter for loops with item 'of'");
 for (let miscrit of miscrits) {
  console.log(miscrit);
 }
 console.log("");

 console.log("Shorter for loops with key 'in'");
 for (let key in miscrits) {
  console.log(miscrits[key]);
 }
 console.log("");


 // A wrod about 'length'
 let cars = [];
 console.log(`Length of cars: ${cars.length}`);
 cars[123] = "Mercedes";
 console.log(`Length of cars: ${cars.length}`);
 console.log("");


// new Array()
console.log("new Array() declaration");
let arrayNew = new Array(4);
console.log(`arrayNew: ${arrayNew}`);
console.log(`arrayNew length: ${arrayNew.length}`)
console.log("");

// Multidimensional arrays
console.log("Multidimensional array");
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("");

// toString
console.log("toString")
let arr = [1, 2, 3];
console.log(`arr: ${arr}`);
console.log(`String(arr): ${String(arr)}`);
console.log("");

// Array operations
console.log("Array operations");
let styles = ["Jazz", "Blues"];
console.log(`Append 'Rock-n-Roll' to the end`);
styles.push("Rock-n-Roll");
console.log("Styles");
console.log(styles);
console.log("Replace the value in the middle with 'Classics'");
styles[1] = "Classics";
console.log("Styles");
console.log(styles);
console.log("Strip of the first value in the array");
styles.shift();
console.log("Styles");
console.log(styles)
console.log("Prepend 'Rap' and 'Reggae' to the array");
styles.unshift("Reggae");
styles.unshift("Rap");
console.log("Styles");
console.log(styles);

// Sum  input numbers
function sumInput() {
  
  // Define variables
  let numberArray = [];
  let isValidNumber;

  // Ask the user for input until stop
  do {
    let userInput = prompt("Enter a number to store in the array, or something else to cancel: ");

    let convertedNumber = Number(userInput);

    let isValidConvertedNumber = convertedNumber ? true : false;
    let isNumberZero = userInput === "0";

    isValidNumber = isValidConvertedNumber || isNumberZero;

    if (isValidNumber) {
      numberArray.push(convertedNumber);
      console.log(`Updated array: [${numberArray}]`);
    }

  } while (isValidNumber);

  console.log("You cancelled the loop!");

  // Sum the values in the array  
  let sum = 0;
  for (let number of numberArray) {
    sum += number;
  }
  console.log(`The sum of your array ['${numberArray}'] is ${sum}`);
}

// sumInput();

function getMaxSubSum(array) {
  
}

