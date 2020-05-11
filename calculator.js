var entries = [];
var total = 0;

var temp = '';

var buttons = document.getElementsByTagName('button');
var display = document.getElementById('answer');

// Add event handlers for each button and run the calculate function when one is pressed
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", calculate);
}

function calculate() {
  let val = this.textContent;

  // Got a number, add to temp
  if (isNaN(val) || val === ".") {
    temp += val;
    val = temp.substring(0, 10);
    display.value = val;
  }

  // Got some symbol other than equals, add temp to our entries
  // then add our current symbol and clear temp
  else if (val === 'AC') {
    entries = [];
    temp = '';
    total = 0;
    display.value = '';
  }

  // Clear last entry
  else if (val === 'CE') {
    temp = '';
    display.value = '';
  }

  // Change multiply symbol to work with eval
  else if (val === 'x') {
    entries.push(temp);
    entries.push("*");
    temp = '';
  }

  // Change divide symbol to work with eval
  else if (val === '÷') {
    entries.push(temp);
    entries.push("/");
    temp = '';
  }

  // Got the equals sign, perform calculation
  else if (val === "=") {
    entries.push(temp);
    let nt = Number(entries[0]);

    for (j = 0; j < entries.length; j++) {
      let nextNum = Number([j + 1]);
      let symbol = entries[j];

      // do the math for that symbol and next entry
      if (symbol === '+') {
        nt += nextNum;
      } else if (symbol === '-') {
        nt -= nextNum;
      } else if (symbol === '*') {
        nt *= nextNum;
      } else if (symbol === '/') {
        nt /= nextNum;
      }
      j++;
    }

    // Swap the '-' symbol so text input handles it correctly
    if (nt < 0) {
      Math.abs(nt) + "-";
    }

    display.value(nt);
    entries = [];
    temp = '';
  }
  // Push number
  else {
    entries.push(temp);
    entries.push(val);
    temp = '';
  }
}