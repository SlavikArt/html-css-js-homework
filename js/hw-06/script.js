/* Створіть HTML-сторінку зі списком повідомлень на форумі і
формою для додавання нового повідомлення. Після заповнення
форми додайте повідомлення до списку на екрані. */
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let message = document.getElementById("message").value;
  let currentDateTime = new Date();
  let formattedTime = currentDateTime.toLocaleTimeString("uk-UA", {
    hour12: false,
  });
  let formattedDate = currentDateTime.toLocaleDateString("uk-UA");

  let li = document.createElement("li");
  li.innerHTML = `<strong>${username}:</strong> ${message} <br> <em>${formattedTime} - ${formattedDate}</em>`;
  document.getElementById("messageList").appendChild(li);

  document.getElementById("username").value = "";
  document.getElementById("message").value = "";
});
