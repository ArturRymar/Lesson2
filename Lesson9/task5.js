let users = [
  { name: "Artur", surname: "Rymar", age: 30, email: "arymar@gmail.com" },
  { name: "Oleg", surname: "Lymar" },
  { name: "Alina", surname: "Vita", age: 29 },
];

for (const user of users) {
  console.log(user);
  let {
    name = name ?? "test",
    surname = "Не вказано",
    age = "Не вказано",
    email = "Не вказано",
  } = user;
  console.log(name, surname, age, email);
}

// Створіть масив об'єктів users де обєкти мають довільні властивості
// (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та
// виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі
