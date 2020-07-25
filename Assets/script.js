// Grabbing seconds
var secondsDisplay = document.querySelector("#seconds");
var question1 = document.querySelector("question1");
var totalSeconds = 60;
var interval;

function startTimer(){
    interval = setInterval(()=>{
      document.getElementById("seconds").textContent =totalSeconds;
      if (totalSeconds<0){
        clearInterval(interval);
      } else {
        totalSeconds--;
      }
    },1000);
}
//   console.log("startTimer started with start quiz button clicked")
//   console.log(totalSeconds);
//   // i just really need seconds elapsed from 60 seconds
//   for (i=60; i>0; i--){
//     var SecondsLeft = i;
//     console.log(SecondsLeft);
//     $("#seconds").replaceWith(SecondsLeft);

//   }
//   // when a wrong answer is selected, time -10 seconds ----- make this a function to call and edit the timer
// }

var gettime = 0;
function takeTimeOff() {

}
function displayTime(){
  $("#seconds").replaceWith(SecondsLeft);
}

var grade = 0;
var questionNumber=0;
var rightAnswer = "";
var userAnswer ="";

var question = [{
  question: "Commonly used data types do NOT include",
  correct: "Alert",
  choices: ["Boolean","alert", "strings", "numbers"],
},
{
  question: "The condition in an if/else statement is enclosed with ____.",
  correct: "parenthesis",
  choices: ["curley brackets","quotations","parenthesis","square brackets"]
}
];

function startQuiz(){
  console.log("Start Quiz function works");
  if (questionNumber<question.length){
    // selecting number of question in the array of question
    rightAnswer = question[questionNumber].correct;
    for (i=0; i<question[questionNumber].choices.length; i++){
      console.log("for loop for start quiz");
      let answerButton = document.createElement("button");
      answerButton.setAttribute("class", "btn-danger m-4 btn answers");
      answerButton.textContent = question[questionNumber].choices[i];
      document.getElementById("answers").append(answerButton);
      document.getElementById("question").innerHTML=question[questionNumber].question;
    }
  }else {
    // save high score
    // gameover();
    console.log("game over");
  }

  document.addEventListener("click", function(event){
    if (event.target && event.target.matches(".answers")){
        userAnswer = event.target.textContent;
        console.log(userAnswer);
        questionNumber++;
        startQuiz();
    }
  
  });


  // step 1: clear question
  // questionDisplay.remove("");
  // step 2: display question
  // questionDisplay.add();
  // answer.replaceWith("");
    // maybe add a show(question1);
  // step 3: addEventListener("hover",value 2);
    // footer shows correct();
  // step 4: addevent Lister("hover", value 1,3,4);
    //footer shows incorrect();
  // step 5: addEventListern("click", value 2);
    // next question();
    // score = score+20;
    // store score to localStorage
  // clear screen
  // step 6: addEeventLister("click, value 1,3,4");
    // -10 seconds off timer(); To do this you will need to take the seconds at that instance, -10, and then redisplay seconds.
    // no change to score
  // step 7: next question(2);
  // Step 8: repeat until question 5;
  // step 9: addPersonToList();
  
  // ^^loop for the above

  // when the loop ends, go to high score page
  // add input field
  // add button | also make sure this stores to localStorage
  // clear button | also make sure this clears localStorage


}


// click starts the quiz
$("#startQuiz").on("click", function(){
  console.log("Start Quiz button works");
  startTimer();
  startQuiz();
});


function addName(){
// took this from class activities
// 1) make an array of objects
// 2) var highScoreArray = [];
// 3) add person to array
// 4) 
}

// View High Scores
$("#ViewScores").on("click", function(){
  event.preventDefault();
  questionDisplay.replaceWith("View High Scores");
  // how to display a div class, or an string of html?
  // is there a function to go back to the main page?
  // localStorage.setItem(""); PLACE TO LOCAL STRAOGE

  answer.replaceWith("Start quiz");
  
});

// --------------------------------------------------
