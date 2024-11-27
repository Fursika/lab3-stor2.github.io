let display = document.getElementById('display');

function appendInput(value) {
  if (display.textContent === '0') {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = '0';
}

function calculate() {
  try {
    const input = display.textContent
      .replace('×', '*')
      .replace('−', '-')
      .replace('√', 'sqrt');
    const result = math.evaluate(input);
    display.textContent = result;
  } catch (error) {
    display.textContent = 'Error';
  }
}
