//Create a muliple choice question trivia game
//The player will have a limited amount of time to finish the game
//Player cannot pick more than one answer per question
//Countdown timer needs to be added
//The game ends when the timer runs out page
//====================================================================
//VARIABLES
var correctAnswer = 0
var incorrectAnswer = 0
var unanswered = 0
var playerChoice = '';//may or may not need this
var timerCountDown = 10;
var index = 0;
var questionCounter = 0;
// var intervalTime;
IntervalTime = setInterval(timerCountDown, 1000);
var timeRemaining = '';
// var questionArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6']

//==================================================================
//Array within an object...
// $(document).ready(function(){
var questions = 
[
  {
	 question: 'What was the name of the girl on small wonder?',
	 options: ['Vicki', 'Danielle', 'Samantha', 'Nicole'],
	 answer: '0'
	},
	{
	  question: 'On Threes Company, what city did the three rommates live in?',
	  options: ['Los Angeles', 'Chicago', 'New Jersey', 'San Diego'],
	  answer: '3'
	},
	{
	  question: 'What was the name of Punky Brusters dog?',
	  options: ['Lena', 'Brandon', 'Spot', 'Cookie'],
	  answer: '1'
	},
	{
	  question: 'What was the full name of Magnum P.I.?',
	  options: ['Oscar Strong', 'Michael Knight', 'Thomas Magnum', 'Carl Pierce'],
	  answer: '2'
	},
	{
	  question: 'What was the name of the principal on Saved By the Bell?',
	  options: ['Richard Belding', 'Tommy Lawson', 'Richard Smalls', 'Austin Love'],
	  answer: '0'	
	},
	{
	  question: 'What was the occupation of Claire Huxtable on The Cosby Show?',
	  options: ['Dentist', 'Doctor', 'Lawyer', 'Scientist'],
	  answer: '2'
	}
]

//FUNCTIONS
//==================================================================

//Function for game start-wait for user to click the button to start the game
// function gameStart() {
  $("#startButton").on("click", function() {
   showMeQuestion();
   timerCountDown();
  }); 


   
//Function to show me the question
function showMeQuestion() {
   if (index === questions.length) { 
        gameOverResults();       
    } else {
      var html = '';
      html = html + '<h3>' + questions[index].question + '</h3>'
      for (var i = 0; i < questions[index].options.length; i++) {
      html = html + '<input type="radio" name="radioName" value=' + i + '>' + questions[index].options[i] + '<br>';
      }
      html = html + '<button onclick=checkAnswer()>Submit</button>';
      console.log(questions[index]);
      $('.questions').empty();
      $('.questions').append(html);
      
    }
 }
//Function for timer to count down while player is answering the question
function timerCountDown () {
    timerCountDown--;
    $("#timeRemaining").text('Time Remaining : ' + timerRemaining);
    if (timeRemaining ===0){
    console.log("Time's Up!");
   	// stopTimer();
   }   
}
//Function to stop the Timer
// function stopTimer() {
// 	clearInterval(intervalTime);
//    console.log(true);
// }
//Function used to reset the timer for next game play
function resetTimer () {
	timerCountDown = 10;
	clearInterval(intervalTime);
	// time = document.getElementByID("timeRemaining");
	IntervalTime = setInterval(timerCountDown, 1000);
	showMeQuestion();
  gameOverResults();
}
//Function to check player's answers' against correct answers 
function checkAnswer() {
    var answer = $('input[type=radio]:checked').val();
    console.log('answer', answer);
    if (answer === questions[index].answer) {
        // alert('Right');
        index++;
        correctAnswer++;
        setTimeout(showMeQuestion, 2000);
        
    } else if (answer === undefined) {
        // alert('Not Answered');
        index++;
        unanswered++;
        setTimeout(showMeQuestion, 2000);
        
    } else {
        // alert ('Wrong');
        index++;
        incorrectAnswer++;
        setTimeout(showMeQuestion, 2000);
    }
 }

 //When player clicks on button to submit the trivia quiz
 // function doneBtn(){
 // 	$("#doneBtn").on("click", function() 
 //Fuction to let the player know how many they have correct, how many they have wrong, and how many they have unanswered and if they win or lose
function gameOverResults() {
    $('.questions').empty();	
    if (correctAnswer < 6){
      $('#totalScoreDiv').html('<p>Correct Answer:' + correctAnswer + '</p><p>Incorrect Answer:' + incorrectAnswer + '</p><p>Unanswered:' + unanswered + '</p>' );
      alert('You Lose');
    } else if (correctAnswer == 6){
  	  $('#totalScoreDiv').html('<p>Correct Answer:' + correctAnswer + '</p><p>Incorrect Answer:' + incorrectAnswer + '</p><p>Unanswered:' + unanswered + '</p>' );
  	  alert('You Win!');
      // gameOverResults();
	  } 
}
// });