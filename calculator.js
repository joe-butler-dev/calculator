var entries = [];
var total = 0;
var temp = '';

var buttons = document.getElementsByTagName('button');
var display = document.getElementById('answer');

// Add event handlers for each button and run the calculate function when one is pressed
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', buttonPressed);
}

function buttonPressed() {
  var val = this.textContent;

  // If a number or dot is pressed, add it to temp and display on screen
  if (!isNaN(val) || val === '.') {
    buttonIsNumberOrDot(val);

    // If AC is pressed, clear everything
  } else if (val === 'AC') {
    buttonIsAC();

    // If CE is pressed, clear the current entry
  } else if (val === 'CE') {
    buttonIsCE();

    // If multiply symbol is pressed, convert it to a * so it can work during calculation
  } else if (val === 'x') {
    buttonIsMultiply();

    // If divide symbol is pressed, convert it to a / so it can work during calculation
  } else if (val === '÷') {
    buttonIsDivide();

    // If equals sign is pressed, perform the calculation
  } else if (val === '=') {
    completeCalculation();

    // If a number is pressed, add it to the entries array
  } else {
    pushNumberToArray(val);
  }
}

function buttonIsNumberOrDot(val) {
  temp += val;
  val = temp.substring(0, 10);
  display.value = val;
}

function buttonIsAC() {
  entries = [];
  total = 0;
  temp = '';
  display.value = '';
}

function buttonIsCE() {
  temp = '';
  display.value = '';
}

function buttonIsMultiply() {
  entries.push(temp);
  entries.push('*');
  temp = '';
}

function buttonIsDivide() {
  entries.push(temp);
  entries.push('/');
  temp = '';
}

function completeCalculation() {
  entries.push(temp);
  let nt = Number(entries[0]);

  for (j = 0; j < entries.length; j++) {
    let nextNum = Number(entries[j + 1]);
    let symbol = entries[j];

    if (symbol === '+') {
      nt += nextNum;
    } else if (symbol === '-') {
      nt -= nextNum;
    } else if (symbol === '*') {
      nt *= nextNum;
    } else if (symbol === '/') {
      nt /= nextNum;
    }
  }

  // Swap the '-' symbol so text input handles it correctly
  if (nt < 0) {
    convertToNegative(nt)
  }

  display.value = nt;
  entries = [];
  temp = '';
}

function pushNumberToArray(val) {
  entries.push(temp);
  entries.push(val);
  temp = '';
}

function convertToNegative(nt) {
  Math.abs(nt) + '-';
}