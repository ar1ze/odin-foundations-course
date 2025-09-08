const findTheOldest = function (array) {
  function computeAge(person) {
    if (!person.yearOfDeath) person.yearOfDeath = 2025;
    return person.yearOfDeath - person.yearOfBirth;
  }

  return array.reduce((oldestPerson, currentPerson) => {
    const oldestAge = computeAge(oldestPerson);
    const currentAge = computeAge(currentPerson);
    return oldestAge < currentAge ? currentPerson : oldestPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
