const placeHolder = 0;
let runningTotal = 0;
let previousOperator;
const output = document.querySelector(".output");

/* function handleSymbol(value) {
  output.innerText = placeHolder;
} */

function handleNumber(value) {
  // If this is the first number recorderd store and render on output.
  if (runningTotal === 0) {
    runningTotal += value;
    output.innerText = value;
    console.log("handleNumber, first occurrence, runningTotal becomes:", value);
  }
  // if runningTotal !== 0 -->
  // Possibilities at this point: (i.e., 99[9] or 9x[9] where the current state is the brackets).
  // if the previous click was not a number (i.e 9x[9] above) --> (we would expect the output screen === 0) --> replace runningTotal with calculated value (i.e., 9x9 --> 81) & render only current buttons value on output screen. Remember that this has to have a num operator and num (i.e., 9x9) bc in the other path (i.e., clicking a symbol/ operator if there was not a previous number prior it will ignore it in handleSymbol so we have to treat this case like it already has a num operator [num] where [num] is the current click event)
  if (output.innerText === 0) {
    `${runningTotal}???____operator___??${value}`;
  }
  // if a number += runningTotal and render runningTotal in output screen also
}

function reRender() {
  const output = document.querySelector(".output");
}

function buttonClick(value) {
  // if what was clicked is not a number
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  reRender();
}

function init() {
  // Add an event listener to the parent element
  document.
    .querySelector(".calc-btns")
    .addEventListener("click", function (event) {
    buttonClick(event.target.innerText);
  });
}

init();

/* Steps:

Game plan:
Initial skeleton/ outline:

Init() 
    clickButton(value) 
        handleNumber(value)
        handleSymbol(value) 
            flushOperation(intPlaceHolder)
            handleMath(value)
        reRender()

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
