const display = document.getElementById('display');
const themeToggle = document.getElementById('themeToggle');

// Append numbers or operators
function appendValue(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = '';
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Square root
function sqrt() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = 'Error';
  }
}

// Power function (square)
function power() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch {
    display.value = 'Error';
  }
}

// Evaluate expression
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Toggle dark mode
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀' : '🌙';
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (e.key.match(/[0-9+\-*/.]/)) {
    appendValue(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    deleteLast();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});
