const question = document.querySelectorAll(".sections h3");
const answer = document.querySelectorAll(".sections p");
const arrow = document.querySelectorAll(".sections span");

for (let i = 0; i < question.length; i++) {
  function showAnswer() {
    if (answer[i].className == "active") {
      answer[i].classList.remove("active");
      question[i].classList.remove("active");
      arrow[i].style.transform = "rotate(0)";
    } else {
      answer[i].classList.add("active");
      question[i].classList.add("active");
      arrow[i].style.transform = "rotate(180deg)";
    }
  }

  question[i].addEventListener("click", showAnswer);
  arrow[i].addEventListener("click", showAnswer);
}
