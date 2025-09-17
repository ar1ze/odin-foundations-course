// Introducing constructors
console.log('Introducing constructors');
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi I'm ${this.name}.`);
  };
  return obj;
}
console.log(createPerson);
console.log('');

// Creating objects
console.log('Creating objects');
const salva = createPerson('Salva');
salva.introduceSelf();
const frankie = createPerson('Frankie');
frankie.introduceSelf();
console.log('');

// Creating obejcts using the `new` keyword
console.log('Creating objects using the `new` keyword');
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi I'm ${this.name}.`);
  };
}

const charpy = new Person('Charpy');
charpy.introduceSelf();
