var allQuestions = document.querySelector(".allQuestions");
var timer = document.querySelector(".startQuiz");
var textContent = document.querySelector(".allQuestions");
var userScore;
var startQuizbutton = document.querySelector(".btn");
var questions = document.querySelector(".question")
var answers = document.querySelector(".answers")
var correctAnswer = document.querySelector(".correctAnswer")


function startQuiz () {
  startQuizbutton.addEventListener("click", function () {
    timerInterval--;
  })
  timerInterval = 120; 
  startQuizbutton.style.display = "none";
  beginQuestions ();
}

function beginQuestions (){
const myQuestions = [
  {
question: "In Major League Baseball a game is _____ innings long?", 
answers:  {
   a: "seven", 
   b: "eight", 
   c: "nine", 
   d: "ten"
},
correctAnswer: "c"
  },
{
question: "In football the endzone is _______ yards deep?", 
answers: {
  a: "15",
  b: "10", 
  c: "12", 
  d: "14"
},
correctAnswer: "b"
},
{
question: "A National Basketball Association game has _________ quarters in the game?", 
answers: {
  a: "three",
  b: "four", 
  c: "five", 
  d: "two"
},
correctAnswer: "b"
},
{
question: "In ice hockey if you cross the blueline before the ________ you are offsides?",
answers: {
  a: "puck", 
  b: "defense", 
  c: "offense", 
  d: "goalie"
},
correctAnswer: "a"
},
{
question: "In baseball a homerun is when the baseball is hit over the _________?",
answers: {
  a: "outfielders", 
  b: "infiedlers", 
  c: "outfield grass",
  d: "wall"
},
correctAnswer: "d"
},
{
question: "What do you wear in football that protects you from getting hit in the head a ____________?",
answers: {
  a: "hat", 
  b: "helmet", 
  c: "mask", 
  d: "shield"
},
correctAnswer:  "b"
},
{
question: "In what sport can you not use your hands _____________?",
answers: { 
  a: "baseball",
  b: "volleyball", 
  c: "tennis", 
  d: "soccer"
},
correctAnswer: "d"
},
{
question: "When basketball was first invented, the basket that was first used was a ____________ basket?",
answer: { 
  a: "banana", 
  b: "grapefruit", 
  c: "peach", 
  d: "plum" 
},
correctAnswer: "c"
},
]
var beginQuestions = true;
beginQuestions.innerHTML = output.join("correctAnswer");
 
// Iterate
function iterated () {
 
    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
 
    // Getting the question
    const question = document.getElementById("questions");
}
var highScores = [];

//var userScore = {
    //initials: InputDeviceInfo.value, 
    //userScore: timer.textContent
//}
highScores.push (userScore)
//console.log(highScores)
JSON.stringify(highScores)

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft = 120;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }
  


}
