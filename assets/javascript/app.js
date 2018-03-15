//Create a muliple choice question trivia game
//The player will have a limited amount of time to finish the game
//Player cannot pick more than one answer per question
//Countdown timer needs to be added
//The game ends when the timer runs out page
 $(document).ready(function(){
//====================================================================
//VARIABLES
var correctAnswer = ;
var incorrectAnswer = ;
var unanswered;
var playerChoice = '';
var timerCountDown = 20;
var index = 0;
var question = 0;
var intervalTime;
var timeRemaining = "";
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
	  question6: 'What was the occupation of Claire Huxtable on The Cosby Show?',
	  options: ['Dentist', 'Doctor', 'Lawyer', 'Scientist'],
	  answer: 'Lawyer'
	}
]
//FUNCTIONS
//==================================================================

//Function for game start
function gameStart() {
  $("#startButton").on("click", function() {
   showMeQuestion();
}
//Function to show me the question
function showMeQuestion () {
  $(".questions").empty();
  for (var i = 0; i < 6; i++)//for loop to loop through the questions 
   $(".questions").text("<p> " + questionArray.length[0]);
}
//Function for the timer to count down
function timerRun() {
	timerCountDown = 20;
	intervalTime = setInterval (countdown, 1000);
}
//Function to let the player know how much time they have left
function timeRemaining(){
   timeRemaining--;
   $('#timeRemaining').text('Timer:' + timeRemaining);
   if (timeRemaining === 0) {
   	//if time runs out
   	//increment questions
   	// question++;
   }
   
}
//Function to let the player know the time is up and questions still unanswered
function timesUp() {
  $(".questions").empty();
  unanswered++;
	stopTimer();
}
//Function to stop the timer and clear it out
function stopTimer(){
	clearInterval(intervalTime);
}
//Function to check the answers of the player's choice
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
    } else (questionArray != )//Still figuring this logic out
//=========================================================================================
//Function to keep up with the choice the user clicked
function playerChoice(){
   document.onkeyup = function(event){
   $("#startButton").on("click", function() 
   console.log()   
 }//Still figuring out this logic to capture user's guess in the best way

//Function for correct guess/win for player and append image so player can see correct answer
function correctGuessWin(){
	stopTimer();
	correct++;
	if (correctAnswer.indexOf(ltr) == )//would index of be best to use here?
	$(".questions").empty();
	$(".questions").text("That's Correct!");
	$(".questions").append("img")	
}
//Function for incorrect guess loss for player and append image so player can see correct answer
function incorrectGuessLoser(){
    stopTimer();
	incorrect++;
	$(".questions").empty();
	$(".questions").text("So Sorry, That's Incorrect!");
	$(".questions").append("Correct Answer: +")
	$(".questions").append("img")
}
//Function to reset the game and start over
function reset(){
	correct = 0;
	incorrect 0;
	unanswered = 0;
	gameStart();
}



 // timerCountDown = 25;
 //   clearInterval(intervalTime);
 //   intervalSet = setInterval (timer, 1000)
}




});