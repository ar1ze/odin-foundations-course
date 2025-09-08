// Objects
let userObject = new Object();
let userEmpty = {};

// Literals and properties
let userLiteral = {
  name: 'John',
  age: 30,
};
console.log('Literals and properties');
console.log(userLiteral);
console.log('');

// Accessing property values
console.log('Accessing property values');
console.log(userLiteral.name, userLiteral.age);
console.log('');

// Remove a property
delete userLiteral.age;
console.log('Removed the property `age`');
console.log(userLiteral);
console.log('');

// Sqyare brackets
console.log('Square brackets');
let userLikesBirds = {};
userLikesBirds['likes birds'] = true;
console.log(userLikesBirds);
console.log(userLikesBirds['likes birds']);
delete userLikesBirds['likes birds'];
console.log(userLikesBirds);
console.log('');

// Computed properties
console.log('Computed properties');
// let fruit = prompt('Which fruit to buy?', 'apple');
let fruit = 'apple';
let bag = {};
bag[fruit] = 5;
console.log(fruit);
console.log(bag.apple);
console.log('');

// Property existence test, 'in' operator
console.log('Property existance test, `in` operator');
let userIN = {};
console.log(userIN.noSuchProperty);
console.log(userIN.noSuchProperty === undefined);

let userINPerson = {
  name: 'John',
  age: 12,
};
console.log(`user:`, userINPerson);
console.log(`'age' in user: ${'age' in userINPerson}`);
console.log(`'blabla' in user: ${'blabla' in userINPerson}`);
console.log('');

// The 'for  .. in' loop
console.log(`The 'for ..  in' loop`);
let miscrit = {
  name: 'Beatronite',
  element: 'Earth',
  rarity: 'Legendary',
};
for (let key in miscrit) {
  console.log(`Key: ${key}`, `Value: ${miscrit[key]}`);
}
console.log('');

// Ordered like an object
console.log('Ordered like an object');
let codes = {
  49: 'Germany',
  41: 'Switzerland',
  44: 'Great Britain',
  // ..,
  1: 'USA',
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}
