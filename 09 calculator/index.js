function getValues(value) {
  document.getElementById("input").value += value;
}
function calculateResult() {
  try {
    // document.getElementById("input").value = eval(
    //   document.getElementById("input").value
    // );
    const expression = document.getElementById("input").value;
    const calculate = new Function(" return " + expression);
    document.getElementById("input").value = calculate();
  } catch (error) {
    document.getElementById("input").value = "Error";
  }
}

function clearResult() {
  document.getElementById("input").value = "";
}

function deleteValues() {
  let val = document.getElementById("input").value;
  document.getElementById("input").value = val.slice(-0, -1);
}
