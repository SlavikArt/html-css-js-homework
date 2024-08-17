/* Створіть HTML-сторінку з галереєю.
Одночасно на екрані відображається 1 зображення та 2
кнопки: Назад і Вперед. При натисканні на кнопки зображення
мають перемикатися у вказаному порядку. Коли наступного /
попереднього зображення не буде, то відповідну кнопку
необхідно блокувати.
Збережіть зображення у заздалегідь підготовленому масиві. */
document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "images/cat1.jpg",
    "images/cat2.jpg",
    "images/cat3.jpg",
    "images/cat4.jpg",
    "images/cat5.jpg",
  ];

  let currentIndex = 0;

  const galleryImage = document.getElementById("galleryImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function updateGallery() {
    galleryImage.src = images[currentIndex];
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
  }

  window.prevImage = function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateGallery();
    }
  };

  window.nextImage = function () {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateGallery();
    }
  };

  updateGallery();
});
