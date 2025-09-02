// Invoking functions
function myFunction() {
  console.log('hello');
}
myFunction();

// Default parameters
function hello(name = 'Chris') {
  console.log(`Hello ${name}!`);
}

hello("Ari");
hello();

// Alternative default parameters
function showMessage(from, text) {
  if (text === undefined)  {
    text = "no text given";
  }
  console.log(`${from}: ${text}`);
}
showMessage("from", "text");

// Anonumous funtion
(function () {
  console.log("hello");
});

// Return function
function random(number) {
  const result = Math.floor(Math.random() * number);
  return result;
}

// Function expression
let sayHi = function() {
  console.log("Hello");
};

sayHi();

// Function as a value
function sayFunction() {
  console.log("Say function");
};
console.log(sayFunction)

// Callback functions
function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

function showOk() {
  console.log("You agreed.");
}

function showCancel() {
  console.log('You canceled the execution.');
}

// ask("Do you agree?", showOk, showCancel);

// Arrow funtions, the basics
let sum = (a, b) => a + b;
console.log(`a + b using arrow function ${sum(1,2)}`);

// Multiline arrow functions
let sumMulti = (a, b) => {
  let result = a + b;
  return result;
};
console.log(`a + b using multiline arrow function: ${sumMulti(1,2)}`);

// JavaScript Call Stack
function add(a, b) {
  return a + b;
}

function average(a, b) {
  return add(a, b) / 2;
}

let x = average(10, 20);
console.log(`Calculating averge: ${x}`);


// Stack overflow
function fn() {
  fn();
}
// console.log(fn())


// Assignment 1
function add7(a) {
  return a + 7;
}

let add7Ex = function(a) {
  return a + 7;
};

let add7Arrow = (a) => {
  return a + 7;
};

let a = 0;
console.log(`Output of function add7 when a = ${a}: ${add7Arrow(a)}`);

// Assingment
function multiply(a, b) {
  return a * b;
}

let multiplyEx = function(a, b) {
  return  a * b;
};

let multiplyArrow = (a, b) => {
  return a * b;
};
console.log(`Output of function multiply: ${multiply(2, 3)}`);

// Assignemnt 3
function capitalize(s) {
  // 1. Extract first letter and the rest
  // 2. Capitalize first letter;
  let firstLetter = s.charAt(0);
  let capitalized = firstLetter.toUpperCase();
  return s.replace(firstLetter, capitalized);
}
let word = "ar1ze";
console.log(`Input word: ${word}\nOutput the function capitalize: ${capitalize(word)}`);

// Assignment 4
function lastLetter(s) {
  return s.charAt(s.length - 1);
}
console.log(`Input word: ${word}]\nOutpuut the function lastLetter: ${lastLetter(word)}`);