const display = document.querySelector(".display-input");
const btn = document.querySelectorAll(".button");
const clearbtn = document.querySelector(".clear");
const cutbtn = document.querySelector(".cut");
const equalbtn = document.querySelector(".equals");
let currentInput = "";
btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (currentInput === "0" || currentInput === "Error") {
      currentInput = "";
    }
    currentInput += e.target.innerHTML;
    updateDisplay();
  });
});

function updateDisplay() {
  display.value = currentInput;
}
clearbtn.addEventListener("click", () => {
  currentInput = "";
  updateDisplay();
});
equalbtn.addEventListener("click", () => {
  try {
    const result = eval(currentInput);
    currentInput = result;
    if (result === Infinity || result === isNaN(result)) {
      throw new Error("Invalide calculation");
    }
  } catch (Error) {
    currentInput = "Error";
  }
  updateDisplay();
});
cutbtn.addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
});
