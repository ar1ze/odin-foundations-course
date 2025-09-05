const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log(
  "Filter the list of inventors for those who were born in the 1500's"
);
let inventorsBorn1500 = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.log('Inventors that were born in the 1500s');
inventorsBorn1500.forEach((inventor) =>
  console.log(`Inventor ${inventor.first} born in ${inventor.year}`)
);
console.log('');

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
console.log('Give us an array of the inventors first and last names');
let inventorFirstLastName = inventors.map(
  (inventor) => `First Name: ${inventor.first}, Last Name: ${inventor.last}`
);
inventorFirstLastName.forEach((inventor) => console.log(inventor));
console.log('');

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log('Sort the inventors by birthdate, oldest to youngest');
let inventorsSortedByBirthdate = inventors.sort((a, b) => a.year - b.year);
console.log('Inventors sorted by birthdate oldest to youngest');
inventorsSortedByBirthdate.forEach((inventor) => console.log(inventor));
console.log('');

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
console.log('How many years did all the inventors live all together?');
let inventorsLivingYears = inventors.reduce(
  (sum, inventor) => sum + (inventor.passed - inventor.year),
  0
);
console.log(
  `The total number of years the inventors lived together: ${inventorsLivingYears}`
);
console.log('');

// 5. Sort the inventors by years lived
console.log('Sort the inventors by years lived');
let inventorsAgeSorted = inventors.sort(
  (a, b) => b.passed - b.year - (a.passed - a.year)
);
console.log('Inventors sorted by age:');
inventorsAgeSorted.forEach((inventor) =>
  console.log(inventor, `Age: ${inventor.passed - inventor.year}`)
);
console.log('');

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name
console.log('Sort the people alphabetically by last name');
let inventorsSortedLastName = inventors.sort((a, b) =>
  a.last.localeCompare(b.last)
);
inventorsSortedLastName.forEach((inventor) => console.log(inventor));
console.log('');

// 8. Reduce Exercise
// Sum up the instances of each of these
console.log('Sum up the instances of each of these');
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];
let countUniqueInstances = data.reduce((accumulator, currentItem) => {
  accumulator[currentItem] = (accumulator[currentItem] || 0) + 1;
  return accumulator;
}, {});
console.log('Sum of unique instances');
console.log(countUniqueInstances);
