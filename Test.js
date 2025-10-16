// function declarationSquare(width, height) {
//     return width * height;
// }
// console.log(declarationSquare(5, 10))


// const expressionSquare = function (width, height) {
//     return width * height;
// }
// console.log(expressionSquare(5, 10))


// const arrowSquare = (width, height) => width * height;
// console.log(arrowSquare(5, 10));

// isAdult = (age) => age >= 18 ? true : false;
// console.log(isAdult(17))

checkOrder = (available, ordered) => {
    let orderStatus;
    if (available < ordered) {
        orderStatus = "Your order is too large, we don’t have enough goods.";
    } else if (ordered === 0) {
        orderStatus = "Your order is empty.";
    } else {
        orderStatus = "Your order is accepted.";
    }
    return orderStatus;
};
console.log(checkOrder(9, 10));
console.log(checkOrder(10, 0));
console.log(checkOrder(10, 10));