//Initial Values
var counter = 30; //Timer that goes from 30 to 0 value
var currentQuestion = 2; //pulls questions from array, by default pulls first question
var score = 0; //counts how many questions the user has selected correctly
var lost = 0; //increment of how many questions the user has answered incorrectly
var timer; //holds the set interval. Allows reset of time

//Display the questions and the choices in the browser

function loadQuestion() {
  //function to call currentQuestion and run choices in document page
  const question = triviaQuestions[currentQuestion].question; //how to run questions
  const choices = triviaQuestions[currentQuestion].choices; //how to run choices

  $("#game").html("<h4>" + question + "</h4>");
}

loadQuestion(); //calling Question
console.log(currentQuestion); // Receiving an undefined value until the letter case was changed in the Question & Choices questions.js
