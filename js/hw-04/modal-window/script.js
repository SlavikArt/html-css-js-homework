/* Створіть HTML-сторінку з кнопкою Відкрити і модальним
вікном. На модальному вікні має бути текст і кнопка Закрити.
Спочатку модальне вікно не відображається. При натисканні
на кнопку Відкрити з’являється модальне вікно, натомість
натискаючи кнопку Закрити – зникає. */
document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("openModalBtn");
  const modal = document.getElementById("myModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const span = document.getElementsByClassName("closeBtn")[0];

  openModalBtn.onclick = function () {
    modal.style.display = "block";
  };

  closeModalBtn.onclick = function () {
    modal.style.display = "none";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
