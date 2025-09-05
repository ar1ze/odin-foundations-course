// Exercise 06 repeatString
console.log('Exercise 06 - repeatString');
function repeatString(string, num) {
  let newString = '';
  for (let i = 0; i < num; i++) {
    newString += string;
  }
  return newString;
}
console.log(repeatString('hey', 3));
console.log('');

// Exercise 07 reverseString
console.log('Exercise 07 reverseString');
function reverseString(string) {
  return string.split('').reverse().join('');
}
console.log(reverseString('hello there'));
console.log('');

// Exercise 08 removeFromArray
console.log('Exercise 08 removeFromArray');
function removeFromArray(array, item) {
  return array.filter((element) => element !== item);
}
let array = [1, 2, 3, 4];
let newArray = removeFromArray(array, 3);
console.log(`Initial array: [${array}]`);
console.log('Removing the item 3 ...');
console.log(`Modified array: [${newArray}]`);
console.log('');

// Exercise 09 sumAll
console.log('Excercise sumAll');
function sumAll(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}
console.log(`sumAll(1, 4): ${sumAll(1, 4)}`);
console.log('');

// Exercise 10 leapYears
console.log('Exercise 10 leapYears');
function leapYears(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
  }
  return false;
}
console.log(`leapYears(2000): ${leapYears(2000)}`);
console.log(`leapYears(1985): ${leapYears(1985)}`);
console.log('');

// Exercise 11 tempConversion
console.log('Exercise 11 tempConversion');
const convertToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};
const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};
console.log(`32 degree Celsius is ${convertToFahrenheit(32)} Fahrenheit`);
console.log(`287 Fahrenheit is ${convertToCelsius(287)} degree Celsius`);
