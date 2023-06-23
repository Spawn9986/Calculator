let output = document.querySelector(".output");
const calculator = document.querySelector(".calculator");
let placeHolder = "0";

function buttonClick(value) {
  //when a button is clicked change the output inner text to match that of the clicked button if its a number
  //output.innerText = value;
  if (isNaN(parseInt(value))) {
    output.innerText = placeHolder;
    /// DO something handlesymbol function etc
  } else {
    output.innerText = value;
    // Do something handleNumber function
  }
}

function init() {
  // Add an event listener to the parent element
  calculator.addEventListener("click", function (event) {
    buttonClick(event.target.innerText);
  });
}

init();
