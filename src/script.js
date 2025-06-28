const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
display.scrollLeft = display.scrollWidth;

buttons.forEach(button => {
  const value = button.dataset.value;

  button.addEventListener("click", () => {
    switch (value) {
      case "ac":
        currentInput = "";
        display.value = "0";
        break;
      case "del":
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput || "0";
        break;
      case "=":
        try {
          // Hitung ekspresi matematika
          const result = eval(currentInput);
          display.value = result;
          currentInput = result.toString(); // biar bisa lanjut dari hasil
        } catch {
          display.value = "Error";
          currentInput = "";
        }
        break;
      default:
        currentInput += value;
        display.value = currentInput;
    }
  });
});
