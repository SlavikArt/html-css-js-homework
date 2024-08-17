/* Реалізуйте простий графічний редактор у браузері. Графічний
редактор має давати можливість обирати фігуру, колір заливки і
розташувати фігуру відповідного кольору на полі для малювання.
Вгорі сторінки необхідно розташувати панель для вибору
фігури та кольору, а нижче – поле для малювання.
Спочатку реалізуйте такий варіант поведінки: при натисканні
мишкою на полі, з’являється фігура стандартного розміру.
Далі додайте наступну можливість: при mousedown – починаємо малювати фігуру; при mouseup – дізнаємося, де вона має
закінчуватися, і відображаємо її у відповідному розмірі. */
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const shapeSelect = document.getElementById("shape");
  const colorInput = document.getElementById("color");

  let startX, startY;
  let isDrawing = false;
  let currentColor = colorInput.value;
  const shapes = [];

  function drawShape(x, y, width, height, shape, color) {
    ctx.fillStyle = color;
    ctx.beginPath();

    if (shape === "rectangle") {
      ctx.rect(x, y, width, height);
    } else if (shape === "circle") {
      const radius = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2;
      ctx.arc(x + width / 2, y + height / 2, radius, 0, Math.PI * 2);
    } else if (shape === "triangle") {
      ctx.moveTo(x, y);
      ctx.lineTo(x + width, y);
      ctx.lineTo(x + width / 2, y + height);
      ctx.closePath();
    }

    ctx.fill();
  }

  function redrawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapes.forEach((shape) => {
      drawShape(
        shape.x,
        shape.y,
        shape.width,
        shape.height,
        shape.shape,
        shape.color
      );
    });
  }

  canvas.addEventListener("mousedown", (e) => {
    startX = e.offsetX;
    startY = e.offsetY;
    isDrawing = true;
  });

  canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;

    redrawCanvas();

    const endX = e.offsetX;
    const endY = e.offsetY;
    const width = endX - startX;
    const height = endY - startY;

    drawShape(startX, startY, width, height, shapeSelect.value, currentColor);
  });

  canvas.addEventListener("mouseup", (e) => {
    if (!isDrawing) return;

    const endX = e.offsetX;
    const endY = e.offsetY;
    const width = endX - startX;
    const height = endY - startY;

    shapes.push({
      x: startX,
      y: startY,
      width,
      height,
      shape: shapeSelect.value,
      color: currentColor,
    });

    redrawCanvas();

    isDrawing = false;
  });

  colorInput.addEventListener("input", (e) => {
    currentColor = e.target.value;
  });

  const clearButton = document.getElementById("clearCanvas");

  clearButton.addEventListener("click", () => {
    shapes.length = 0;
    redrawCanvas();
  });
});
