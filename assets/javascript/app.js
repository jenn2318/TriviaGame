//Create a muliple choice question trivia game
//The player will have a limited amount of time to finish the game
//Player cannot pick more than one answer per question
//Countdown timer needs to be added to the page
//The game ends when the timer runs out 
//====================================================================

var correctAnswer = []
var incorrectAnswer = []
var playerChoice = '';
var questions = 0

//==================================================================
//Array within an object...this may be helpful?
var question1 = 'What was the name of the girl on small wonder?';
var questionOptions = ['Vicki', 'Danielle', 'Samantha', 'Nicole'];
var questionAnswer = 'Vicki';
var playerChoice = ''; 

var questions = [
 question: 'What was the name of the girl on small wonder?',
 options: ['Vicki', 'Danielle', 'Samantha', 'Nicole'],
 answer: 'Vicki',
]


//==================================================================
//Check answers to see if corect

function checkAnswers(){
	if (question1 == "Vicki") {
    correct++;
}
    if (question2 == "San Diego") {
    	correct++;
}    if (question3 == "Brandon") {
    	correct++;
}    if (question4 == "Thomas Magnum") {
    	correct++;
}   if (question5 == "Richard Belding") {
	    correct+;
}   if(question6 == "Lawyer"){
       correct++;
    }


function correctGuess(){
}

function incorrectGuess(){
}