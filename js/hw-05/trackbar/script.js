/* Створіть HTML-сторінку з трекбаром.
Надайте користувачеві можливість змінювати положення
синього вказівника. */
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("myRange");

  slider.addEventListener("input", function () {
    console.log(slider.value);
  });
});
