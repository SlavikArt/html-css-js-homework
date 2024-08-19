/* Реалізуйте генератор випадкових рядків.
Користувач повинен мати можливість вказати:
■ довжину рядка;
■ з яких символів може складатися рядок:
• цифри;
• латинські літери у верхньому регістрі;
• латинські літери у нижньому регістрі.
При натисканні на кнопку Generate необхідно вивести
згенерований за критеріями користувача рядок у текстове поле. */
$(document).ready(function () {
  $("#generate").click(function () {
    var length = $("#length").val();
    var includeNumbers = $("#includeNumbers").is(":checked");
    var includeUppercase = $("#includeUppercase").is(":checked");
    var includeLowercase = $("#includeLowercase").is(":checked");

    var characters = "";
    if (includeNumbers) characters += "0123456789";
    if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";

    var result = "";
    for (var i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    $("#result").val(result);
  });

  $("#copy").click(function () {
    var result = $("#result");
    result.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
  });
});
