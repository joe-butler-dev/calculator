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

}


/*

  // Change divide symbol to work with eval
  else if val is divide symbol
  push the temp value to the entries array
  push / to the entries array
  set temp to empty string

  // Got the equals sign, perform calculation
  else if val is equals symbol
  push temp value to entries array

  declare nt variable which turns the first entry array value and converts it to a number
  for loop to go through entries array
    declare nextNum variable which converts entries[i + 1] to a number (skips the math symbol being used)
    declare symbol variable which gets the math symbol being used;

    // do the math for that symbol and next entry
    if the symbol is +, add nextNum to nt
    else if symbol is -, subtract nextNum from nt
    else if symbol is *, multiple nextNum by nt
    else if symbol is /, divide nextNum by nt

    increment i
  close for loop

  // Swap the '-' symbol so text input handles it correctly
  if nt is less than zero
    convert it to an absolute number and add - string

    display value of nt in the answer input
    clear the entries array
    clear temp back to empty string

    display value of nt in the answer input

  // Push number
  else
    push the temp value to entries
    push the val value to entries
    clear temp back to empty string
  end if statement
end statement
*/