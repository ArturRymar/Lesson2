let initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let returnEvenNumbers = (array) => {
  return array.filter((number) => number % 2 === 0);
};

let filteredByEven = returnEvenNumbers(initialArray);

console.log(initialArray);
console.log(filteredByEven);
