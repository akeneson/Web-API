// Grabbing seconds
var secondsDisplay = document.querySelector("#seconds");
var totalSeconds = 0;
var secondsElapsed = 0;
var interval;
function startTimer(){
  console.log("startTimer started with start quiz button clicked")
  console.log(totalSeconds);
  console.log(secondsElapsed);
  // i just really need seconds elapsed from 60 seconds
}




// View High Scores Variable
var viewScores = document.querySelector("#ViewScores");
// QUESTION DISPLAY BOX
var questionDisplay = document.querySelector("#questionDisplay");
// ANSWER DISPLAY BOX
var answer = document.querySelector("#answer");
// start button
var startButton = document.querySelector("#startQuiz");
// card-body
var cardBody = document.querySelector("#card-body");
// variable grade
var grade = 0;

function startQuiz(){
  console.log("Start Quiz function works");
  // step 1: clear question
  
  // step 2: display question
  questionDisplay.replaceWith("Question and answer 1 here");
    // maybe add a show(question1);
  // step 3: addEventListener("hover",value 2);
    // footer shows correct();
  // step 4: addevent Lister("hover", value 1,3,4);
    //footer shows incorrect();
  // step 5: addEventListern("click", value 2);
    // next question();
    // score = score+20;
    // store score
  // step 6: addEeventLister("click, value 1,3,4");
    // -10 seconds off timer();
    // no change to score
  // step 7: next question(2);
  // Step 8: repeat until question 5;
  // step 9: addPersonToList();

}


// click starts the quiz
startButton.addEventListener("click", function(){
    console.log("start quiz button works");
  // starts timer
    startTimer();
  // starts quiz 
    startQuiz();
})

// array of people
var people =[{name:"Amy"}];
var currentID = 0;

// took this from class activities
function addPersonToList(event){
    event.preventDefault();
    var name = nameEntered.value;
    var li = document.createElement("li");
    li.id = people.length;
    li.innerHTML = name + "<button>Add to High Score</button>";
    people.push({name:name});
    peopleListEl.append(li);
    console.log(peopleListEl);
}

// View High Scores
viewScores.addEventListener("click", function(){
    event.preventDefault();
    question.textContent=("View High Scores")
});


// --------------------------------------------------
