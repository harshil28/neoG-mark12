var input = document.querySelectorAll(".question-input");
var checkHypo = document.querySelector("#submit-button");
var finalOutput = document.querySelector("#output");

function checkHypotnuse() {
  var number1 = Number(input[0].value) * Number(input[0].value);
  var number2 = Number(input[1].value) * Number(input[1].value);
  var total = number1 + number2;
  var hypo = Math.sqrt(total).toFixed(2);
  finalOutput.innerText = "Hypotenuse is " + hypo;
}

checkHypo.addEventListener("click", checkHypotnuse);
