const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
console.log('At least one person 19 or older?');
let atLeastOnePersonOlder19 = people.some((person) => 2025 - person.year > 19);
console.log(atLeastOnePersonOlder19);
console.log('');

console.log('Is everyone 19 or older?');
let isEveryone19orOlder = people.every((person) => 2025 - person.year >= 19);
console.log(isEveryone19orOlder);
console.log('');

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
console.log('Find the comment with ID of 823423');
let commentID823423 = comments.find((comment) => comment.id === 823423);
console.log(commentID823423);
console.log('');

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
console.log('Delete the comment with the id of 823423');
comments.splice(
  comments.findIndex((comment) => comment.id === 823423),
  1
);
console.log('Deleted the comment with id: 823423 ...');
console.log('Modified array:');
comments.forEach((comment) => console.log(comment));
