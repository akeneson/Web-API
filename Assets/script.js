// Variables for timer
var secondsDisplay = document.querySelector("#seconds");
var question1 = document.querySelector("question1");
var totalSeconds = 60;
var interval;

function startTimer(){
  event.preventDefault();
  interval = setInterval(()=>{
  document.getElementById("seconds").textContent =totalSeconds;
  if (totalSeconds<1){
    clearInterval(interval);
    alert("Time is up");
  } else {
    totalSeconds--;
  }
  },1000);
}

//   // when a wrong answer is selected, time -10 seconds ----- make this a function to call and edit the timer
// }

var gettime = 0;
function takeTimeOff() {
  // -10 seconds
}
function displayTime(){
  // -10 seconds
}

var grade = 0;
var questionNumber=0;
var rightAnswer = "";
var userAnswer ="";

var questionArray = [{
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

// click starts the quiz
var startQuizButton = document.getElementById("startQuiz");
var introContainer = document.getElementById("intro");

startQuizButton.addEventListener("click", function(){
  console.log("Start Quiz button works");
  startTimer();
  startQuiz();
});

function startQuiz(){
  console.log("startQuiz Function is working");
  footer.replaceWith("Pick an answer.");

  // checks to makes sure that startQuiz() keeps running until out of questions
  if (questionNumber<questionArray.length){
    console.log("if statement in startQuiz working");
    // loop for the array to run through all the questions
    questionDisplay.replaceWith(document.getElementById("question").innerHTML=questionArray[questionNumber].question);
    console.log("FIRST: DISPLAY QUESTION");
      // for loop will create all the buttons
      for (i=0; i<questionArray[questionNumber].choices.length; i++){
        // SECOND: make buttons for answers
        rightAnswer = questionArray[questionNumber].correct;
        let answerButton = document.createElement("button");
        answerButton.setAttribute("class", "btn-choice m-4 btn", "id=answers");
        answerButton.textContent = questionArray[questionNumber].choices[i];
        document.getElementById("answers").append(answerButton);
        console.log("SECOND: DISPLAY BUTTONS");
        
        
      }
    
  }
  
}





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

  footer.replaceWith("");
  
});
