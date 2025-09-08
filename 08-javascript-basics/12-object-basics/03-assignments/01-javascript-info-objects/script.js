// 1. Map to Names
console.log('Map to Names');
let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let users = [john, pete, mary];

let userNames = users.map((user) => user.name);
console.log(userNames);
console.log('');

// 2. Map to objects
console.log('Map to Objects');
let eric = { name: 'Eric', surname: 'Smith', id: 1 };
let david = { name: 'David', surname: 'Hunt', id: 2 };
let julie = { name: 'Julie', surname: 'Key', id: 3 };

let people = [eric, david, julie];
let userFullNames = people.map((person) => ({
  fullName: `${person.name} ${person.surname}`,
  id: person.id,
}));
console.log(userFullNames);
console.log('');

// 3. Sort users by age
console.log('Sort users by age');
let usersSorted = users.sort((a, b) => b.age - a.age);
console.log(usersSorted);
console.log('');

// 4. Get average age
console.log('Get Average Age');
let averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;

console.log(averageAge);
console.log('');

// 5. Create keyed object from array
console.log('Create keyed object from an array');
let usersIdNameAge = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

let usersById = groupById(usersIdNameAge);
console.log(usersById);
