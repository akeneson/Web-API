var startQuizButton = document.getElementById("startQuiz");
var questionDisplay = document.getElementById("questionDisplay");
var viewScores = document.getElementById("viewScores");
var question = document.getElementById("question");
var answer = document.getElementById("answers");
var answerbutton1 = document.getElementById("answerbutton1");
var answerbutton2 = document.getElementById("answerbutton2");
var answerbutton3 = document.getElementById("answerbutton3");
var answerbutton4 = document.getElementById("answerbutton4");


var questionBank = [{
    question: "Commonly used data types do NOT include",
    answer1: "boolean",
    answer2: "strings",
    answer3: "numbers",
    answer4:  "alert"
},
{
    question: "The condition in an if/else statement is enclosed with ____.",
    answer1: "parenthesis",
    answer2: "curley brackets",
    answer3: "square brackets",
    answer4: "quotations"
},
{
    question: "Arrays in Javascript can be used to store ____.",
    answer1:"more arrays",
    answer2: "boolean", 
    answer3:"numbers and strings",
    answer4: "all of the above"
},
{
    question: "A very useful tool during development and debugging content that is for printing to the debugger is ________.",
    answer1: "console.log", 
    answer2: "loop",
    answer3: "javascript", 
    answer4: "terminal | get bash"
},
{
    question: "String values must be enclosed with ____ when being assigned to variables.",
    answer1: "quotes", 
    answer2: "curley brackets", 
    answer3: "parethesis", 
    answer4: "commas"
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
            // DISPLAYS QUESTION
            question.replaceWith(questionBank[i].question);

            // makes a button
            var button1 = document.createElement("BUTTON");
            var button2 = document.createElement("BUTTON");
            var button3 = document.createElement("BUTTON");
            var button4 = document.createElement("BUTTON");
            button1.innerHTML = questionBank[i].question;
            button1.set


            // DISPLAYS ANSWER 1
            var ans1 = button1.replaceWith(questionBank[i].answer1);
            console.log(questionBank[i].answer1);
            // answerbutton1.style
            // DISPLAYS ANSWER 2
            var ans2 = button2.replaceWith(questionBank[i].answer2);
            console.log(questionBank[i].answer2);
            // DISPLAYS ANSWER 3
            var ans3 = button3.replaceWith(questionBank[i].answer3);
            console.log(questionBank[i].answer3);
            // DISPLAYS ANSWER 4
            var ans4 = button4.replaceWith(questionBank[i].answer4);
            console.log(questionBank[i].answer4);

                
            

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
