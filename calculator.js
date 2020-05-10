var entries = [];
var total = 0;

var temp = '';

var buttons = document.getElementsByTagName('button');

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", calculate);
}

function calculate() {
  let val = this.textContent;
}




/*
When a button is pressed
  Declare val value to take the value of the button pressed and return it as text .text()

  // Got a number, add to temp
  If value is NaN or is .
    add the value to val
    display val, which is the substring from 0 - 10 of temp

  // Got some symbol other than equals, add temp to our entries
  // then add our current symbol and clear temp
  Else if val is AC
  clear entries array
  set temp string back to ''
  set total to 0
  display value as an emptry string

  // Clear last entry
  else if val is CE
  set temp to empty string
  display value as empty string

  // Change multiply symbol to work with eval
  else if value is x
  add temp to the entries array
  push * to the array
  set temp to empty string

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