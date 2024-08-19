$(document).ready(function () {
  $(".upload-btn").each(function () {
    let grade = $(this).closest(".task").find(".grade .badge").text();
    if (grade !== "Не перевірено") {
      $(this).hide();
    }
  });

  $(".upload-btn").click(function () {
    let taskName = prompt("Введіть назву файлу для завантаження:");
    if (taskName) {
      alert('Файл "' + taskName + '" завантажено.');
    }
  });

  $(".reupload-btn").click(function () {
    let taskName = prompt("Введіть назву файлу для перезавантаження:");
    if (taskName) {
      alert('Файл "' + taskName + '" перезавантажено.');
    }
  });

  $(".delete-btn").click(function () {
    if (confirm("Ви впевнені, що хочете видалити це завдання?")) {
      $(this).closest(".task").remove();
      alert("Завдання видалено.");
    }
  });

  $(".download-btn").click(function () {
    let taskName = prompt("Введіть назву файлу для скачування:");
    if (taskName) {
      alert('Файл "' + taskName + '" скачано.');
    }
  });
});
