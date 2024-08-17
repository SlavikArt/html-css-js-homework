/* 1. Запросіть у користувача його ім’я та виведіть у відповідь
«Привіт, (його ім’я)!». */
let name = prompt("Please, enter your name:");
console.log(`Hello, ${name}!`);

/* 2. Запросіть у користувача його рік народження, підрахуйте
скільки йому років і виведіть результат. Поточний рік
вкажіть у коді як константу. */
const currentYear = 2024;
let birthYear = prompt("Please, enter your birth year:");
let age = currentYear - birthYear;
console.log(`You are ${age} years old.`);

/* 3. Користувач вводить суму грошей у гаманці та вартість
однієї шоколадки. Програма виводить скільки шоколадок
може купити користувач і скільки здачі в нього
залишиться. */
let money = prompt("Please, enter the amount of money in your wallet:");
let chocolatePrice = prompt("Please, enter the price of a chocolate bar:");
let chocolateAmount = Math.floor(money / chocolatePrice);
let change = money % chocolatePrice;
console.log(
  `You can buy ${chocolateAmount} chocolate bars and your change will be ${change} UAH.`
);
