function appendValue(value) {
  const display = document.getElementById("display");
  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  document.getElementById("display").textContent = "0";
  document.getElementById("history").textContent = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  let current = display.textContent;
  if (current.length > 1) {
    display.textContent = current.slice(0, -1);
  } else {
    display.textContent = "0";
  }
}

function calculate() {
  try {
    const display = document.getElementById("display");
    const history = document.getElementById("history");

    let expression = display.textContent;
    let result = eval(expression);

    history.textContent = expression;
    display.textContent = result;
  } catch (error) {
    display.textContent = "error";
  }
}
