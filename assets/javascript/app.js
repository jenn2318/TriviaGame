//Create a muliple choice question trivia game
//The player will have a limited amount of time to finish the game
//Player cannot pick more than one answer per question
//Countdown timer needs to be added to the page
//The game ends when the timer runs out 
//====================================================================
//VARIABLES
var correctAnswer = []
var incorrectAnswer = []
var playerChoice = '';
var timer = 25;
var score = 0;
var question = 0;
var questionArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6']
// var questions = 0

//==================================================================
//Array within an object...this may be helpful?
// var question1 = 'What was the name of the girl on small wonder?';
// var questionOptions = ['Vicki', 'Danielle', 'Samantha', 'Nicole'];
// var questionAnswer = 'Vicki';
// var playerChoice = ''; 

var questions = 
[
  {
	 question1: 'What was the name of the girl on small wonder?',
	 options: ['Vicki', 'Danielle', 'Samantha', 'Nicole'],
	 answer: 'Vicki'
	},
	{
	  question2: 'On Threes Company, what city did the three rommates live in?',
	  options: ['Los Angeles', 'Chicago', 'New Jersey', 'San Diego'],
	  answer: 'San Diego'
	},
	{
	  question3: 'What was the name of Punky Brusters dog?',
	  options: ['Lena', 'Brandon', 'Spot', 'Cookie'],
	  answer: 'Brandon'
	},
	{
	  question4: 'What was the full name of Magnum P.I.?',
	  options: ['Oscar Strong', 'Michael Knight', 'Thomas Magnum', 'Carl Pierce'],
	  answer: 'Thomas Magnum'
	},
	{
	  question5: 'What was the name of the principal on Saved By the Bell?',
	  options: ['Richard Belding', 'Tommy Lawson', 'Richard Smalls', 'Austin Love'],
	  answer: 'Richard Belding'	
	},
	{
	  question6: 'What was the occupation of Claire Huxstable on The Cosby Show?',
	  options: ['Dentist', 'Doctor', 'Lawyer', 'Scientist'],
	  answer: 'Lawyer'
	}
]

//==================================================================
//Check answers to see if corect

function gameStart() {

}


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