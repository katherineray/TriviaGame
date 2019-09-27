//Initial Values
var counter = 30; //Timer that goes from 30 to 0 value
var currentQuestion = 0; //pulls questions from array, by default pulls first question
var score = 0; //counts how many questions the user has selected correctly
var lost = 0; //increment of how many questions the user has answered incorrectly
var timer; //holds the set interval. Allows reset of time

//Display the questions and the choices in the browser

function loadQuestion() {
	//function to call currentQuestion and run choices in document page
	const question = triviaQuestions[currentQuestion].question; //how to run questions
	const choices = triviaQuestions[currentQuestion].choices; //how to run choices
	$("#time").html("Timer: " + counter);
	$("#game").html(`<h4>${question}</h4>`);
    loadChoices(choices);    //calling choices array
}	
function loadChoices(choices) {
	var result = "";
	for (let i = 0; i < choices.length; i++) {  //looping p tags
		result += `<p class='choice' data-answer="${choices[i]}">${choices[i]}</p>`; //data to be saved for all choices
 		}
    return result;

loadQuestion(); //THIS IS BREAKING my page, i am unable to discover the root cause as it was working earlier
				 //I have worked on this with class mates and they are unable to figure our why this is breaking
		 		//I will need to review the breakpoint with instructor/TA because if my method is faulty 
