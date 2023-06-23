const output = document.querySelector(".output");
const calculator = document.querySelector(".calculator");
const placeHolder = "0";
let storedValues = "";

function handleSymbol(value) {
  output.innerText = placeHolder;
}

function handleNumber(value) {
  //check if there were previosly any stored values prior to current click event
  // if none stored -->
  if (storedValues.length === 0) {
    storedValues += value;
    output.innerText = value;
    // if some previosly stored -->
  } else {
    // Were the previously stored values all numbers?
    if (storedValues)
  }
}

function buttonClick(value) {
  // if what was clicked is not a number
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
}

function init() {
  // Add an event listener to the parent element
  calculator.addEventListener("click", function (event) {
    buttonClick(event.target.innerText);
  });
}

init();

/* Steps:
1 -  Layout and functionality (output, numbers, symbols; 4 col, 6 rows)
    o functions
        + Init (includes Event Listener)
        + Event Listener
        + clickButton
        + handleNumber
        + handleSymbol
2 - HTML
3 - Style using CSS Grids and buttons wrapped in a div
4 - Add Event Listener to parent div (calculator)
    o add callback: clickButton function (will take the inner text of the button clicked as an argument when evoked) within Event Listener function
5 - Write the clickButton function. 
    o conditional --> check if its not a number (use handleSymbol function), else use handleNumber function;
*/
