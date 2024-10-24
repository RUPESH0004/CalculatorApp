const display = document.querySelector('.display-input');
const btn = document. querySelectorAll('.buttons');
const clearbtn = document.querySelector('.clear');
const cutbtn = document.querySelector('.cut');
const equalbtn = document.querySelector('.button equals');
let currentInput = "";
function updateDisplay()
{
    display.value = currentInput;
}
updateDisplay();
