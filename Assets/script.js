var startQuizButton = document.getElementById("startQuiz");
var questionDisplay = document.getElementById("questionDisplay");
var viewScores = document.getElementById("viewScores");
var question = document.getElementById("question");
var answer = document.getElementById("answers");


var questionBank = [{
    question: "Commonly used data types do NOT include",
    choices: ["Alert", "boolean", "strings", "numbers"],
    correctAnswer: "alert"
},
{
    question: "The condition in an if/else statement is enclosed with ____.",
    choices: ["curley brackets", "quotations", "square brackets", "parenthesis"],
    correctAnswer: "parenthesis"
},
{
    question: "Arrays in Javascript can be used to store ____.",
    choices: ["more arrays", "boolean", "numbers and strings", "all of the above"],
    correctAnswer: "all of the above"
},
{
    question: "A very useful tool during development and debugging content that is for printing to the debugger is ________.",
    choices: ["console.log", "loop", "javascript", "terminal | get bash"],
    correctAnswer: "console.log"
},
{
    question: "String values must be enclosed with ____ when being assigned to variables.",
    choices: ["quotes", "curley brackets", "parethesis", "commas"],
    correctAnswer: "quotes"
}
];

startQuizButton.addEventListener("click", function () {
    console.log("Start Quiz button works");
    startTimer();
    quizQuestions();
});

function quizQuestions() {
    console.log("quizQuestions function works");
    intro.replaceWith("");
    startQuizButton.style.visibility= "hidden";
    footer.replaceWith("Pick an answer.")
    showQuiz();


    function showQuiz() {

        console.log("showQuiz function works");
        // store out put and the anwer chocies
        var displayQuestions = [];
        var answersToBeDisplayed = "";
        var QuestionNumber=0;

        for (var i = 0; i < questionBank.length; i++) {
            // for every question ....
            console.log(questionBank[i].question);
            question.replaceWith(questionBank[i].question);
            var questionNumber = i;

            // for every question's answer
            var answerFromQuestionsArray = Array.from(questionBank[i].choices);

            for (var i = 0; i < answerFromQuestionsArray.length; i++) {
                choice = answerFromQuestionsArray[i];
                console.log(answerFromQuestionsArray[i]);

                let answerButton =document.createElement("button");

                answerButton.setAttribute("class", "btn m-4 btn id=answers");

                answerButton.textContent (answerFromQuestionsArray[i]);

                document.getElementById("answers").append(answerButton);

                console.log(answerButton);


                console.log(answerFromQuestionsArray[i]);
                // printable variable
                var choice = [];
                choice.push(answerFromQuestionsArray[i]);
                console.log(choice);
                // I can NOT get this to show to move forward with the homework
                
            }

            // userAnswer = document.getElementbyID("#answers").onClick("click", function(){
            //     console.log("userAnswer works");
            //     return this.answers;
        }




    }
}








// Variables for timer
var secondsDisplay = document.querySelector("#seconds");
var question1 = document.querySelector("question1");
var totalSeconds = 60;
var interval;





function startTimer() {
    event.preventDefault();
    interval = setInterval(() => {
        document.getElementById("seconds").textContent = totalSeconds;
        if (totalSeconds < 1) {
            clearInterval(interval);
            alert("Time is up");
        } else {
            totalSeconds--;
        }
    }, 1000);
}

// when a wrong answer is selected, time -10 seconds ----- make this a function to call and edit the timer
// 

var gettime = 0;

function takeTimeOff() {
    // -10 seconds
}
function displayTime() {
    // -10 seconds
}




function addName() {
    // took this from class activities
    // 1) make an array of objects
    // 2) var highScoreArray = [];
    // 3) add person to array
    // 4) 
}

// View High Scores
$("#ViewScores").on("click", function () {
    event.preventDefault();
    questionDisplay.replaceWith("View High Scores");
    viewScores.setAttribute("visible");
    let container = questionDisplay.createElement("container");
    container.setAttribute("id= viewScoresContainer");
    document.querySelector("#viewScoresContainer").innerHTML="testing";
    // how to display a div class, or an string of html?
    // is there a function to go back to the main page?
    // localStorage.setItem(""); PLACE TO LOCAL STRAOGE

    footer.replaceWith("");

});
