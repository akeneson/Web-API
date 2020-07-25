// Grabbing seconds
var secondsDisplay = document.querySelector("#seconds");
var question1 = document.querySelector("question1");
var totalSeconds = 60;
var interval;
function startTimer(){
  console.log("startTimer started with start quiz button clicked")
  console.log(totalSeconds);
  // i just really need seconds elapsed from 60 seconds
  for (i=60; i>0; i--){
    var SecondsLeft = i;
    console.log(SecondsLeft);
    $("#seconds").replaceWith(SecondsLeft);

  }
  // when a wrong answer is selected, time -10 seconds ----- make this a function to call and edit the timer
}

var grade = 0;
var question = {
  Question: "Commonly used data types do NOT include",
  Correct: "<ul><button>Alert</button></ul>",
  Wrong: "<ul><button>Boolean</button></ul>",
  Wrong: "<ul><button>String</button></ul>",
  Wrong: "<ul><button>Numbers</button></ul>",
  
  printInfo: function(){
    console.log("inside printInfo(");
  }
}
function startQuiz(){
  console.log("Start Quiz function works");
  // step 1: clear question
  
  // step 2: display question
  questionDisplay.replaceWith("display question here");
  answer.replaceWith("");
    // maybe add a show(question1);
  // step 3: addEventListener("hover",value 2);
    // footer shows correct();
  // step 4: addevent Lister("hover", value 1,3,4);
    //footer shows incorrect();
  // step 5: addEventListern("click", value 2);
    // next question();
    // score = score+20;
    // store score
  // clear screen
  // step 6: addEeventLister("click, value 1,3,4");
    // -10 seconds off timer();
    // no change to score
  // step 7: next question(2);
  // Step 8: repeat until question 5;
  // step 9: addPersonToList();
  

}


// click starts the quiz
$("#startQuiz").on("click", function(){
  console.log("Start Quiz button works");
  startTimer();
  startQuiz();
});



// took this from class activities
// 1) make an array of objects
// 2) var highScoreArray = [];
// 3) add person to array
// 4) 

var nameEntered = "";



// View High Scores
$("#ViewScores").on("click", function(){
  event.preventDefault();
  questionDisplay.replaceWith("View High Scores");
  answer.replaceWith("Start quiz");
  
});

// --------------------------------------------------
