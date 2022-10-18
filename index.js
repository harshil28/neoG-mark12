var quizForm = document.querySelector(".quiz-form");
var submitButton = document.querySelector("#submit-button");
var finalOutput = document.querySelector("#output");

var rightAnswers = ["90°", "right angled"];

function calculateSum() {
  var score = 0;
  var index = 0;
  const formResult = new FormData(quizForm);
  // console.log(formResult);
  for (var values of formResult.values()) {
    if (values === rightAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  finalOutput.innerText = "Your Score is : " + score;
}

submitButton.addEventListener("click", calculateSum);
