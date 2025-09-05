// 1. FOR each element in the array
// 2. IF element is even multiply by three
// 3. Add the number to the total

function sumOfTripledEvens(array) {
  let evenArray = array.filter((number) => number % 2 == 0);
  let tripledEvensArray = evenArray.map((number) => number *3);
  let sumTripledEvens = tripledEvensArray.reduce(
    (sum, current) => sum + current, 0 
  );
  return sumTripledEvens;
}

// Chained solution
function sumOfTripledEvensChain(array) {
  return array
    .filter((number) => number % 2 == 0)
    .map((number) => number * 3)
    .reduce((sum, current) => sum + current);
}

const arrayNumbers = [1,2,3,4,5];
console.log(sumOfTripledEvensChain(arrayNumbers));