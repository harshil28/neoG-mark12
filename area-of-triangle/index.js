var inputAngle = document.querySelectorAll(".question-input");
var submitButton = document.querySelector("#submit-button");
var finalOutput = document.querySelector("#output");

function areaOfTriangle() {
  var number1 = inputAngle[0].value;
  var number2 = inputAngle[1].value;
  var area = 0.5 * number1 * number2;
  console.log(area);
  finalOutput.innerText = "Area Of Triangle is " + area;
}

submitButton.addEventListener("click", areaOfTriangle);
