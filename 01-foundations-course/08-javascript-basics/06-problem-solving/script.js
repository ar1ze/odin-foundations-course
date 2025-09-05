let userInput = prompt(
  'Hello enter the number you would like to FizzBuzz up to: '
);
let intNumber = parseInt(userInput);

let message = `You entered: ${intNumber}\nHere is the FizzBuzz sequence:`;

for (let i = 1; i <= intNumber; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    message += '\nFizzBuzz';
  } else if (i % 3 == 0) {
    message += '\nFizz';
  } else if (i % 5 == 0) {
    message += '\nBuzz';
  } else {
    message += `\n${i}`;
  }
}

alert(message);
