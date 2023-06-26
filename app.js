// ======== GLOBAL VARIABLES ===========
let buffer = "0";
let runningTotal = 0;
let previousOperator;
const output = document.querySelector(".output");

// ============= LOGIC ================

// Initiates (target DOM elements and add Event Listeners etc)
function init() {
  // Add an event listener to the parent element and event target for individual click
  document
    .querySelector(".calc-btns")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

init();

// Event occurs. Now what?
function buttonClick(value) {
  // Click event is not a number
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  }
  // Click event is a number
  else {
    handleNumber(value);
  }
  // After all is done reRender the output screen
  reRender();
}

function handleNumber(value) {
  // store the number in a buffer while it is being processed (not delaing with what is rendered on screen. That is for reRender())
  //buffer has to be a string as the initial variable so we can add more to it later as a string instead of auto calculating
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
}

function handleSymbol(value) {
  switch (value) {
    case "C":
      console.log("switch, C");
      break;
    case "=":
      console.log("switch, =");
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else buffer = buffer.slice(0, -1);
      console.log("switch, ←");
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      console.log("switch, operator");
      break;
  }
}

function reRender() {
  // take what was stored in the buffer and render on the screen after all calculations (handled seperately) are complete
  output.innerText = buffer;
}

/* ============ Initial Skeleton/ Outline ================

Init() 
    clickButton(value) 
        handleNumber(value)
        handleSymbol(value) 
            flushOperation(intPlaceHolder)
            handleMath(value)
        reRender()
*/
