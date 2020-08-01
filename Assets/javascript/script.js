// variables to keep track of quiz state
// Tracks current question
var currentQuestionIndex
// Tracks time as an number
var time
// Will hold the interval function
var timerId

// variables to reference DOM elements
var startScreen = document.getElementById("start-screen");
var questionSection = document.getElementById("questions");

function startQuiz() {
    // hide start screen----- This is the only way I can figure out to clear the screen
    // startScreen.replaceWith("");
    startScreen.className = "d-none";


    // un-hide questions section
    questionSection.className = "questionSection";
    console.log("questionSection to show");
    getQuestion();


    // start timer

    // show starting time

}

function getQuestion() {
    // get current question object from array stored in questions.js
    // var currentQuestion = questions[currentQuestionIndex]
    console.log(questions);
    console.log(questionBank[0].question);
    console.log(questionBank[0].choices[0]);
    console.log(questionBank[0].answer);
    // update title with current question

    // clear out any old question choices

    // loop over choices

    // create new button for each choice

    // attach click event listener to each choice

    // display on the page
}

// function questionClick() {
//   // check if user guessed wrong
//   if () {
//     // penalize time

//     // display new time on page

//     feedbackEl.textContent = 'Wrong!'
//   } else {

//     feedbackEl.textContent = 'Correct!'
//   }

//   // flash right/wrong feedback on page for half a second
//   feedbackEl.setAttribute('class', 'feedback')
//   setTimeout(function () {
//     // Set the feedback back to hidden after a second
//     feedbackEl.setAttribute('class', 'feedback d-none')
//   }, 1000)

//   // move to next question
//   currentQuestionIndex++

//   // check if we've run out of questions
//   if () {
//     quizEnd()
//   } else {
//     getQuestion()
//   }
// }

// function quizEnd() {
//   // stop timer

//   // show end screen

//   // show final score

//   // hide questions section
// }

// function clockTick() {
//   // update time


//   // check if user ran out of time
//   if (time <= 0) {
//     quizEnd()
//   }
// }

// function saveHighscore() {
//   // get value of input box

//   // make sure value wasn't empty
//   if () {
//     // get saved scores from localstorage, or if not any, set to empty array

//     // format new score object for current user


//     // save to localstorage

//     // redirect to next page
//     window.location.href = 'highscores.html'
//   }
// }

// user clicks button to submit initials

// user clicks button to start quiz

var startQuizButton = document.getElementById("start");
startQuizButton.addEventListener("click", function () {
    console.log("Start Quiz button works");
    // startTimer();
    startQuiz();
    // quizQuestions();
});














// // -------------------My stuff -----------------------------
// var questionDisplay = document.getElementById("questionDisplay");
// var viewScores = document.getElementById("viewScores");
// var question = document.getElementById("question");
// var answer = document.getElementById("answers");
// var answerbutton1 = document.getElementById("answerbutton1");
// var answerbutton2 = document.getElementById("answerbutton2");
// var answerbutton3 = document.getElementById("answerbutton3");
// var answerbutton4 = document.getElementById("answerbutton4");


// function quizQuestions() {
//     console.log("quizQuestions function works");
//     intro.replaceWith("");
//     startQuizButton.style.visibility= "hidden";
//     footer.replaceWith("Pick an answer.")
//     showQuiz();


//     function showQuiz() {

//         console.log("showQuiz function works");
//         // store out put and the anwer chocies
//         var displayQuestions = [];
//         var answersToBeDisplayed = "";
//         var QuestionNumber=0;

//         for (var i = 0; i < questionBank.length; i++) {
//             // for every question ....
//             console.log(questionBank[i].question);
//             // DISPLAYS QUESTION
//             question.replaceWith(questionBank[i].question);

//             // makes a button
//             var button1 = document.createElement("BUTTON");
//             var button2 = document.createElement("BUTTON");
//             var button3 = document.createElement("BUTTON");
//             var button4 = document.createElement("BUTTON");
//             button1.innerHTML = questionBank[i].question;
//             button1.set


//             // DISPLAYS ANSWER 1
//             var ans1 = button1.replaceWith(questionBank[i].answer1);
//             console.log(questionBank[i].answer1);
//             // answerbutton1.style
//             // DISPLAYS ANSWER 2
//             var ans2 = button2.replaceWith(questionBank[i].answer2);
//             console.log(questionBank[i].answer2);
//             // DISPLAYS ANSWER 3
//             var ans3 = button3.replaceWith(questionBank[i].answer3);
//             console.log(questionBank[i].answer3);
//             // DISPLAYS ANSWER 4
//             var ans4 = button4.replaceWith(questionBank[i].answer4);
//             console.log(questionBank[i].answer4);




//             // userAnswer = document.getElementbyID("#answers").onClick("click", function(){
//             //     console.log("userAnswer works");
//             //     return this.answers;
//         }




//     }
// }








// // Variables for timer
// var secondsDisplay = document.querySelector("#seconds");
// var question1 = document.querySelector("question1");
// var totalSeconds = 60;
// var interval;





// function startTimer() {
//     event.preventDefault();
//     interval = setInterval(() => {
//         document.getElementById("seconds").textContent = totalSeconds;
//         if (totalSeconds < 1) {
//             clearInterval(interval);
//             alert("Time is up");
//         } else {
//             totalSeconds--;
//         }
//     }, 1000);
// }

// // when a wrong answer is selected, time -10 seconds ----- make this a function to call and edit the timer
// // 

// var gettime = 0;

// function takeTimeOff() {
//     // -10 seconds
// }
// function displayTime() {
//     // -10 seconds
// }




// function addName() {
//     // took this from class activities
//     // 1) make an array of objects
//     // 2) var highScoreArray = [];
//     // 3) add person to array
//     // 4) 
// }

// // View High Scores
// $("#ViewScores").on("click", function () {
//     event.preventDefault();
//     questionDisplay.replaceWith("View High Scores");
//     viewScores.setAttribute("visible");
//     let container = questionDisplay.createElement("container");
//     container.setAttribute("id= viewScoresContainer");
//     document.querySelector("#viewScoresContainer").innerHTML="testing";
//     // how to display a div class, or an string of html?
//     // is there a function to go back to the main page?
//     // localStorage.setItem(""); PLACE TO LOCAL STRAOGE

//     footer.replaceWith("");

// });
