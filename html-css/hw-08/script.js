const card = document.getElementById("card");

card.addEventListener("click", function (e) {
  if (
    !e.target.classList.contains("number") &&
    !e.target.classList.contains("name") &&
    !e.target.classList.contains("cvv") &&
    !e.target.classList.contains("date-valid")
  ) {
    card.classList.toggle("flipped");
  }
});

document.querySelector(".submit-btn").addEventListener("click", function () {
  const cardNumber = document.querySelector(".number").value;
  const cardName = document.querySelector(".name").value;
  const cardValid = document.querySelector(".date-valid").value;
  const cardCVV = document.querySelector(".cvv").value;

  alert(
    `Card Number: ${cardNumber}\nCardholder Name: ${cardName}\nValid Thru: ${cardValid}\nCVV: ${cardCVV}`
  );
});
