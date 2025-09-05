// The standard for loop 
console.log("For loop");
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
console.log("");

// Looping through collections
console.log("Looping through collection")
const cats = ["Leopard", "Serval"];
for (const cat of cats) {
  console.log(`'${cat}'`);
}
console.log("");

// Exiting loops with break
console.log("Exiting loops  with break");
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    break;
  } else {
    console.log(i);
  }
}
console.log("");

// Skipping iterations with continue
console.log("Skipping iterations with continue");
for (let i = 1; i <= 5; i++) {
  let sqRoot = Math.sqrt(i);
  if (Math.floor(sqRoot) !== sqRoot) {
    continue;
  }
  console.log(sqRoot);
}
console.log("");

// While and do ... while
console.log("While");
let i = 0;
const word = "Pokemon";
while (i < word.length) {
  console.log(`'${word.charAt(i)}'`);
  i++;
}
console.log("");

console.log("Do...while");
const miscrits = ["charpy", "woolly"];
let myFavoriteMiscrits = "My miscrits are called ";
let j = 0;

do {
  if (j == miscrits.length - 1) {
    myFavoriteMiscrits += `and ${miscrits[j]}.`;
  } else {
    myFavoriteMiscrits += `${miscrits[j]}, `;
  }
  j++;
} while (j < miscrits.length);
console.log(myFavoriteMiscrits);

// Labels for break/continue
// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`);

//     if (!input) {
//       break outer;
//     }

//   }
// }
// alert("Done!");

// Output even nymbers in the loop
console.log("Output even numbers in the loop");
for (let i = 2; i <= 10; i++) {
  if (i % 2 ===0) {
    console.log(i);
  }
}

let k = 0;
const m = 3;
while (k < m) {
  console.log(`number ${k}!`);
  k++;
}

// Repeat until the input is correct 
let guessedNum;
do {
  guessedNum = prompt("Enter a number greater than 100: ");
} while (guessedNum <= 100 && guessedNum);

// Ouput prime numbers
const number = 10;
nextPrime: for (let i = 2; i <= number; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}