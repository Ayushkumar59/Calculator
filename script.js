let display = document.getElementById("display");


function appendValue(value) {
  display.value += value;
}


function clearDisplay() {
  display.value = "";
}


function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    if (display.value === "") {
      return;
    }

    let expression = display.value;

    expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

    let result = eval(expression);

    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
