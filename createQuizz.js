let question;
let answers;
let content = [];

let url = "http://18.236.221.151:8000/quizz";

fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    //   console.log(data)
  });

document.getElementById("reponse0").addEventListener("click", () => {
  removeSelected();
  document.getElementById("buttonA").classList.add("added");
});

// let dataIndice = document.getElementById("reponse0").dataset.indice
// checkIfCorrect(dataIndice)

document.getElementById("reponse1").addEventListener("click", () => {
  removeSelected();
  document.getElementById("buttonB").classList.add("added");
});
// let dataIndice = document.getElementById("reponse1").dataset.indice
// checkIfCorrect(dataIndice)

document.getElementById("reponse2").addEventListener("click", () => {
  removeSelected();
  document.getElementById("buttonC").classList.add("added");
});
// let dataIndice = document.getElementById("reponse2").dataset.indice
// checkIfCorrect(dataIndice)

document.getElementById("reponse3").addEventListener("click", () => {
  removeSelected();
  document.getElementById("buttonD").classList.add("added");
});
// let dataIndice = document.getElementById("reponse3").dataset.indice
// checkIfCorrect(dataIndice)

const removeSelected = () => {
  document.getElementById("buttonA").classList.remove("added");
  document.getElementById("buttonB").classList.remove("added");
  document.getElementById("buttonC").classList.remove("added");
  document.getElementById("buttonD").classList.remove("added");
};
// answers = [document.getElementById(`answers`)];
// console.log(answers)

document.getElementById("next").addEventListener("click", function (event) {
  $("#exampleModal").modal("show");
  let questionContent = document.getElementById("questionContent").value;
  $(".modal-body").html(questionContent);
  const correctAnswer = document.getElementsByClassName("added")[0];
  const sibling = correctAnswer.nextElementSibling.value;
  //   console.log(sibling);
  const correctAnswerIndice = correctAnswer.dataset.indice;
  $("#correctAnswer").html(sibling);
  // $("#correctAnswer").html(`numéro ${+correctAnswerIndice + 1}`);
  const answersElements = document.getElementsByClassName("champs");
  let answers = [];

  for (i = 0; i < answersElements.length; i++) {
    answers.push(answersElements[i].value);
  }

  let newContent = {
    question: questionContent,
    correctAnswer: correctAnswerIndice,
    answers: answers,
  };
  content.push(newContent);
  //   console.log(content);

  let quizzName = document.getElementById("quizzName").value;
  let createdBy = document.getElementById("createdBy").value;
  document.getElementById("nextQuestion").addEventListener("click", () => {
    removeSelected();
    $("#exampleModal").modal("hide");
    document.getElementById("questionContent").value = "";
    for (i = 0; i < answersElements.length; i++) {
      answersElements[i].value = "";
    }
  });
  //   document.getElementById("finQuizz").addEventListener("click", () => {
  //     $.post("http://18.236.221.151:8000/quizz");
  $("#finQuizz").click(function () {
    $.post("http://18.236.221.151:8000/quizz", { content }, function (
      data,
      status
    ) {
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});
// });
