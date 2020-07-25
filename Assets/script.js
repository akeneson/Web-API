// QUESTION DISPLAY BOX
var question = document.querySelector("#questionDisplay");

// ANSWER DISPLAY BOX
var answer = document.querySelector("#answer");


// start button
var startButton = document.querySelector("#startQuiz");

// card-body
var cardBody = document.querySelector("#card-body");

var grade = 0;

var questionBank = [
    
    {
        question: "Commonly used data types do NOT include",
        option1:"boolean",
        correct1:"numbers",
        option2:"strings",
        option3:"alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with ____.",
        correct1:"parenthesis",
        option1:"quotes",
        option2:"curley brackets",
        option3:"square brackets"
    },
    {
        question:"Arrays in Javascript can be used to store ____.",
        option1:"more arrays",
        option2:"boolean",
        option3: "numbers and strings",
        correct1: "all of the above"
    },
    {
        question:"String values must be enclosed with ____ when being assigned to variables",
        option1:"curley brackets",
        option2:"parenthesis",
        correct1:"quotes",
        option3:"commas"
    },
    {
        question:"A very useful tool during development and debugging content that is for printing to the debugger is",
        correct1:"console.log",
        option1:"javascript",
        option2: "terminal|gitbash",
        option3: "loops"
    }
]


function displayQuestion(){
    question.textContent="none";
    for (i=0; i<questionBank.length; i++){
        console.log("loop for questions working");
        question.textContent=questionBank[i];
    }
    return;

}


// click starts the quiz
startButton.addEventListener("click", function(){
    console.log("start quiz button works");
    displayQuestion();
})



if (answer){
    console.log("answer if statement working");
    grade++;
}
