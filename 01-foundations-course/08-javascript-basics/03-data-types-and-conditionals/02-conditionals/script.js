// Boolean is the result
console.log("Boolean is the result");
let result  = 5 > 4;
console.log(result);

// String comparison
console.log("String comparison");
console.log('Z' > 'A');
console.log('Bee' > 'Be');

//  Comparison of different types
console.log("Comparison of different types");
console.log(`'2' > 1: ${'2' > 1}`)
console.log(`'01' == 1  ${'01'==1}`);

// Strict equality
console.log("Strict equality");
console.log(`0 == false: ${0 == false}`);
console.log(`'' == false: ${''==false}`);

// Comparison with null and undefined
console.log("comparison with null and undefined");
console.log(`null === undefined: ${null === undefined}`);
console.log(`null == undefined: ${null == undefined}`);

// The if else else if statement
console.log("The if statement");

let time = 2;
let greeting = "Hello";

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good  day";
}  else {
  greeting = "Good evening"
} 

console.log(`The hour is ${time} so we say "${greeting}"`);


