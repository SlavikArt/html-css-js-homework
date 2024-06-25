/* 1. Запросіть у користувача його вік та визначіть,
 ким він є: дитиною (0–12), підлітком (12–18), 
 дорослим (18–60) або пенсіонером (60– …). */
let userAge = prompt("Please, input your age:");
userAge = Number(userAge);

if (isNaN(userAge) || userAge < 0) {
  alert("Please, input a valid age.");
} else {
  if (userAge >= 0 && userAge < 12) {
    alert("You are a child.");
  } else if (userAge >= 12 && userAge < 18) {
    alert("You are a teenager.");
  } else if (userAge >= 18 && userAge < 60) {
    alert("You are an adult.");
  } else {
    alert("You are a senior.");
  }
}

/* 2. Запросіть  у  користувача  рік  та  перевірте  чи  є  він високосним. 
Високосний рік або кратний 400, або кратний 4 і при цьому не кратний 100. */
let inputYear = prompt("Please, input a year:");
inputYear = Number(inputYear);

if (isNaN(inputYear) || inputYear <= 0) {
  alert("Please, input a valid year.");
} else {
  let isLeapYear = false;

  if (inputYear % 400 === 0 || (inputYear % 4 === 0 && inputYear % 100 !== 0)) {
    isLeapYear = true;
  }

  if (isLeapYear) {
    alert(`${inputYear} is a leap year.`);
  } else {
    alert(`${inputYear} is not a leap year.`);
  }
}

/* 3. Напишіть конвертор валют. Користувач вводить кількість USD, 
вибирає в яку валюту хоче перекласти: EUR, UAN або AZN, 
і отримує відповідну суму */
let usdAmount = prompt("Input the amount of USD:");
usdAmount = parseFloat(usdAmount);

if (isNaN(usdAmount) || usdAmount <= 0) {
  alert("Input a valid amount.");
} else {
  let chosenCurrency = prompt(
    "Input the currency (EUR, UAH, AZN):"
  ).toUpperCase();
  const conversionRates = {
    EUR: 0.83,
    UAH: 28.5,
    AZN: 1.6,
  };

  if (conversionRates[chosenCurrency] !== undefined) {
    let convertedAmount = usdAmount * conversionRates[chosenCurrency];
    alert(
      `${usdAmount} USD equals ${convertedAmount.toFixed(2)} ${chosenCurrency}.`
    );
  } else {
    alert("Invalid currency.");
  }
}
