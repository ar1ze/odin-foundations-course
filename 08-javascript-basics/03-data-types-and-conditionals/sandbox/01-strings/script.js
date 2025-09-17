// Declaring strings
const string = 'The revolution will not be televised.';
console.log('Declaring strings');
console.log(string);

// Single quotes double quotes, and backticks
console.log('Single quotes, double qutoes, and backticks');
const single = 'Single quotes';
const double = 'Double quotes';
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

// Embeddings JavaScript
console.log('Embeeddings JavaScript');
const firstName = 'Chris';
const greeting = `Hello, ${firstName}`;
console.log(greeting);

const one = 'Hello, ';
const two = 'how are you?';

const joined = `${one}${two}`;
console.log(joined);

// Concatenation using +
console.log('Concatenation using +');
const greeting2 = 'Hello';
const name2 = 'Bob';
console.log(greeting2 + ', ' + name2);

// Multiline strings
console.log('Multiline strings');
const newline = `One day you finally knew 
what you  had to do, and began,`;
console.log(newline);

// Including quotes in strings
const goodQuotes1 = 'She said "I  think so!"';
const goodQuotes2 = `She said "I'm not going in there!`;

console.log(goodQuotes1);
console.log(goodQuotes2);

const bigmouth = "I've got no right to take my place...";
console.log(bigmouth);

// String length
console.log('String legnth');
let text = 'ABC';
let length = text.length;
console.log(`The text ${text} is ${length} char long`);

// CharAt()
let textHello = 'HELLOW WORLD';
let charHello = textHello.charAt(0);
console.log(`The first charactor of the text ${textHello} is '${charHello}'`);

// Slice
let textFruit = 'Apple, Banana, Kiwi';
let part = text.slice(7, 13);
console.log(`String slice of ${textFruit} is ${part}`);

// Upper case
let text1 = 'Hello World!';
let text2 = text1.toUpperCase();
console.log(`This text ${text1} to upper case results in ${text2}`);
