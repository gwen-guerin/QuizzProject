$( document ).ready(function() {

    // let quizzData = [] 
    let indexData = 0
    let indexContent = []
    let isCorrect = false
    let score = 0
    let url = `http://18.236.221.151:8000/quizz/${localStorage.something}`
  
    function displayData(data) {
        
        let answersLength = indexContent[indexData].answers.length
        let question = indexContent[indexData].question
        document.getElementById("question").innerHTML = question

        for ( i=0; i < answersLength; i++) {
            let answers = indexContent[indexData].answers
        document.getElementById(`reponse${i}`).innerHTML = answers[i]
      }
    }
    
    fetch(url)
    .then((response) => {
      response.json().then((data)=> {
        indexContent = data.quizz.content;
        displayData()
        
      });
      
      
      function checkIfCorrect (dataIndice) {
        let correctAnswer = indexContent[indexData].correctAnswer
  
        if (dataIndice == correctAnswer) {
          isCorrect = true 
        } else {
          isCorrect = false
        }
      }
  
    document.getElementById("reponse0").addEventListener("click", () => {
          removeSelected();
          document.getElementById("reponse0").classList.add("added");
  
          let dataIndice = document.getElementById("reponse0").dataset.indice;
          checkIfCorrect(dataIndice)
          // console.log(isCorrect)
          
  
    })
  
      document.getElementById("reponse1").addEventListener("click", () => {
        removeSelected();
        document.getElementById("reponse1").classList.add("added");
  
        let dataIndice = document.getElementById("reponse1").dataset.indice
        checkIfCorrect(dataIndice)
        // console.log(isCorrect)
  
  
  
    })
  
      document.getElementById("reponse2").addEventListener("click", () => {
        removeSelected();
        document.getElementById("reponse2").classList.add("added");
  
        let dataIndice = document.getElementById("reponse2").dataset.indice
        checkIfCorrect(dataIndice)
        // console.log(isCorrect)
  
        // console.log(dataIndice)
  
  
    })
  
      document.getElementById("reponse3").addEventListener("click", () => {
        removeSelected();
        document.getElementById("reponse3").classList.add("added");
  
        let dataIndice = document.getElementById("reponse3").dataset.indice
        checkIfCorrect(dataIndice)
        // console.log(isCorrect)
  
        // console.log(dataIndice)
  
  
  
    })
      
      const removeSelected = () => {
        document.getElementById("reponse0").classList.remove("added");
        document.getElementById("reponse1").classList.remove("added");
        document.getElementById("reponse2").classList.remove("added");
        document.getElementById("reponse3").classList.remove("added");
      }
  
    
  
    document.getElementById("next").addEventListener("click", function(event){
      if (isCorrect === true) {
        score ++;
      } 
      indexData ++; 
  
      if (indexData >= indexContent.length) {
         $('#exampleModal').modal('show')  
         $(".modal-body").html(score/indexContent.length*100 + "% de réussite !")
          return 
        } 
        else {
            displayData()  
          }
          removeSelected()
          
        })
  
      })
        
      })