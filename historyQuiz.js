let url = "http://18.236.221.151:8000/quizz";
let quizzData = [];
let indexData = 0;

function displayData(data) {
  let quizzLength = quizzData.length;
  let quizzName;

  let container = document.createElement("div");
  container.id = "container";
  document.getElementById("body").appendChild(container);

  for (i = 0; i < quizzLength; i++) {
    // console.log(data)
    name = quizzData[i].name;
    creator = quizzData[i].createdBy;
    let quizzId = quizzData[i]._id.$oid;
    console.log(quizzId);
    let date = new Date(quizzData[i].createdAt);
    date =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

    quizzName = document.createElement("div");
    quizzName.className = "quizz";
    quizzName.id = quizzId;
    localStorage.something = quizzId;
    quizzName.innerHTML = name;
    document.getElementById("container").appendChild(quizzName);

    miniContainer = document.createElement("div");
    miniContainer.id = "miniContainer";
    miniContainer.innerHTML = `Created by ${creator} le ${date}`;
    document.getElementsByClassName("quizz")[i].appendChild(miniContainer);

    document.getElementById(quizzId).addEventListener("click", () => {
      const quizzUrl = `http://18.236.221.151:8000/quizz/$oid${quizzId}`;
      location.href =
        "file:///C:/Users/Gwen/Documents/CODE/EXERCICES/exo%20stef/quizz/quizz.html";
    });
  }
}

fetch(url).then((response) => {
  response.json().then((data) => {
    quizzData = data.quizzs;
    console.log(quizzData);
    displayData(data);
  });
});
