var input = document.querySelectorAll(".question-input");
var checkbutton = document.querySelector("#submit-button");
var finalOutput = document.querySelector("#output");

function calculateSum(angle1, angle2, angle3) {
  var totalAngle = angle1 + angle2 + angle3;
  return totalAngle;
}

function isTriangle() {
  var sum = calculateSum(
    Number(input[0].value),
    Number(input[1].value),
    Number(input[2].value)
  );
  if (sum === 180) {
    finalOutput.innerText = "yay!! It is a triangle";
  } else {
    finalOutput.innerText = "No it does not form a triangle";
  }
}

checkbutton.addEventListener("click", isTriangle);
