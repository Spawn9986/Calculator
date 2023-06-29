// ======== GLOBAL VARIABLES ===========
let buffer = "0";
let runningTotal = 0;
let previousOperator;
const output = document.querySelector(".output");

// ============= LOGIC ================

// Event occurs. Now what?
function buttonClick(value) {
  // Click event is not a number (i.e, a symbol)
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  }
  // Click event is a number
  else {
    handleNumber(value);
  }
  // After all is done reRender the output screen (seperate rendering from other for simplicity)
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
      buffer = "0";
      runningTotal = 0;
      break;
    case "=":
      console.log("switch, =");
      if (previousOperator === null) {
        // need two numbers to do math
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      //when you add anything to a string it automatically converts it to a string
      buffer = "" + runningTotal;
      runningTotal = 0;
      break;
    case "←":
      console.log("switch, ←");
      if (buffer.length === 1) {
        buffer = "0";
      } else buffer = buffer.slice(0, -1);
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      console.log("switch, operator");
      handleMath(value);
      break;
  }
}

function handleMath(value) {
  if (buffer === "0") {
    //do nothing
    return;
  }
  //create an interim buffer that turns the current buffer (a string) into an integer to use with runningTotal
  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = value;

  buffer = "0";
}

function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}

function reRender() {
  // take what was stored in the buffer and render on the screen after all calculations (handled seperately) are complete
  output.innerText = buffer;
}

// Initiates (target DOM elements and add Event Listeners etc)
function init() {
  // Add an event listener to the parent element and event target for individual click
  document
    .querySelector(".calc-btns")
    .addEventListener("click", function (event) {
      if (event.target === output) {
        return;
      }
      buttonClick(event.target.innerText);
    });
}

init();

/* ============ Initial Skeleton/ Outline ================

Init() 
    clickButton(value) 
        handleNumber(value)
        handleSymbol(value) 
            flushOperation(intPlaceHolder)
            handleMath(value)
        reRender()
*/
