// click starts the quiz
var startQuizButton = document.getElementById("startQuiz");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var question = document.getElementById("question");

var questionBank = [{
    question: "Commonly used data types do NOT include",
    correct: "Alert",
    choices: ["Boolean", "strings", "numbers"],
  },
  {
    question: "The condition in an if/else statement is enclosed with ____.",
    correct: "parenthesis",
    choices: ["curley brackets","quotations","parenthesis","square brackets"]
  },
  {
    question: "Arrays in Javascript can be used to store ____.",
    correct: "all of the above", 
    choices: ["more arrays","boolean","numbers and strings","all of the above"]
  },
  {
    question: "A very useful tool during development and debugging content that is for printing to the debugger is ________.",
    correct:"console.log",
    choices: ["console.log","javascript","terminal | get bash","loops",]
  },
  {
    question: "String values must be enclosed with ____ when being assigned to variables.",
    correct:"quotes",
    choices: ["curley brackets","parethesis","quotes","commas"]
  }
  ];


startQuizButton.addEventListener("click", function(){
  console.log("Start Quiz button works");
  startTimer();
  startQuiz();
});

function startQuiz(){
    console.log("startQuiz function working");
    footer.replaceWith("Pick an answer.");
    questionDisplay.replaceWith("Questions to show here");
    for (i=0; i<questionBank.length; i++){
        console.log("test");
    }

    

}






// -----------------------------TIMER-------------------------------
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

// --------------------------View High Scores -------------------------
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
