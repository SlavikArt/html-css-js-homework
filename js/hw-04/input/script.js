/* Створіть HTML-сторінку для введення імені користувача.
Потрібно перевіряти кожен символ, який вводить користувач.
Якщо користувач ввів цифру, то не відображати її в input. */
document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("username");
  inputField.addEventListener("input", validateInput);
});

function validateInput(e) {
  e.target.value = e.target.value.replace(/[0-9]/g, "");
}
