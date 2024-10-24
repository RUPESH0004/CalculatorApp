// Select elements
const display = document.querySelector('.display-input');
const buttons = document.querySelectorAll('.button');
const clearButton = document.querySelector('.clear');
const backspaceButton = document.querySelector('.cut');
const equalsButton = document.querySelector('.equals');

// Initialize display value
let currentInput = '0';

// Function to update display
function updateDisplay() {
    display.value = currentInput;
}

// Button click event
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '0' || currentInput === 'Error') {
            currentInput = ''; // Clear display if it shows '0' or 'Error'
        }
        currentInput += button.textContent; // Append button value
        updateDisplay(); // Update display
    });
});

// Clear button event
clearButton.addEventListener('click', () => {
    currentInput = '0'; // Reset to initial value
    updateDisplay(); // Update display
});

// Backspace button event
backspaceButton.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1) || '0'; // Remove last character or reset
    updateDisplay(); // Update display
});

// Equals button event
equalsButton.addEventListener('click', () => {
    try {
        // Evaluate the expression safely
        const result = eval(currentInput.replace(/[^0-9+\-*/.]/g, '')); // Allow only valid characters
        if (result === Infinity || isNaN(result)) {
            throw new Error('Invalid Calculation');
        }
        currentInput = String(result); // Update current input with result
    } catch (error) {
        currentInput = 'Error'; // Show error message
    }
    updateDisplay(); // Update display
});
