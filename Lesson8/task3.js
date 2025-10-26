let initialArray = [10, 20, 30, 40, 50];

let arrayElementsSum = (array) => {
    let initialValue = 0;
    return array.reduce((accumulator, currentValue) => { return accumulator + currentValue }
        , initialValue);
}
console.log(arrayElementsSum(initialArray));