let runningTotal = 0;
let buffer = "0";
let previousOpperator = null;
const screen = document.querySelector(".screen");

function reRender() {
  screen.innerText = buffer;
}

function handleMath(value) {
  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOpperator = value;
  buffer = "0";
}

function flushOperation(intBuffer) {
  const happy = parseInt(intBuffer);
  if (previousOpperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOpperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOpperator === "×") {
    return runningTotal * happy;
  } else if (previousOpperator === "÷") {
    runningTotal /= intBuffer;
  }
}

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  reRender();
}

function handleNumber(value) {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
}

function handleSymbol(value) {
  switch (value) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      previousOpperator = null;
      break;
    case "=":
      if (previousOpperator === null) {
        return;
      }
      //const newTotal = flushOperation(parseInt(buffer));
      previousOpperator = null;
      buffer = flushOperation(parseInt(buffer)).toString();
      runningTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    default:
      handleMath(value);
      break;
  }
}

document
  .querySelector(".calc-buttons")
  .addEventListener("click", function (event) {
    buttonClick(event.target.innerText);
  });
