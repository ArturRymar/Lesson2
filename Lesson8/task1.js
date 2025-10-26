
const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let numberCount = (array) => {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    for (let i = 0; i < array.length; i++) {
        switch (true) {
            case array[i] > 0: positiveCount++;
                break;
            case array[i] < 0: negativeCount++;
                break;
            case array[i] === 0: zeroCount++;
        }
    }
    return `
Кількість позитивних чисел: ${positiveCount}!
Кількість негативних чисел: ${negativeCount}!
Кількість нульових чисел: ${zeroCount}!`;
};
console.log(numberCount(numbers));


// Ваше завдання - написати програму для обчислення кількості позитивних,
// негативних та нульових чисел у заданому масиві чисел.

// Створіть масив чисел за допомогою конструкції const numbers = [2, -5, 0, 7, -3, 0, 10, -8].
// Задайте змінні positiveCount, negativeCount та zeroCount зі значенням 0.
// Вони будуть використовуватись для відстеження кількості позитивних,
//  негативних та нульових чисел в масиві.
// Використовуючи цикл for, пройдіться по кожному елементу масиву numbers.
// Перевірте чи число позитивне, негативне чи нульове, та збільште відповідну змінну
//  (positiveCount, negativeCount або zeroCount) на 1.
// Після завершення циклу виведіть значення змінних positiveCount,
// negativeCount та zeroCount на консоль.
// Приклад виводу на консоль: