//Create a muliple choice question trivia game
//The player will have a limited amount of time to finish the game
//Player cannot pick more than one answer per question
//Countdown timer needs to be added
//The game ends when the timer runs out page
 $(document).ready(function(){
//====================================================================
//VARIABLES
var correctAnswer = 0
var incorrectAnswer = 0
var unanswered = 0
var playerChoice = '';//may or may not need this
var timerCountDown = 15;
var index = 0;
var questionCounter = 0;
// var intervalTime;
IntervalTime = setInterval(timerCountDown, 1000);
var timeRemaining = '';
// var questionArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6']

//==================================================================
//Array within an object...

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

//Function for game start-wait for user to click the button to start the game
function gameStart() {
  $("#startButton").on("click", function() {
   showMeQuestion();
  }
});   
gameStart();

//Function to show me the question
function showMeQuestion() {
     if (index === questions.length) {        
    } else {
      var html = '';
      html = html + '<h3>' + questions[index].question + '</h3>'
      for (var i = 0; i < questions[index].options.length; i++) {
      html = html + '<input type="radio" name="radioName" value=' + questions[index].options[i] + '>' + questions[index].options[i] + '<br>';
      }
      html = html + '<button onclick=checkAnswer()>Submit</button>';
      console.log(questions[index]);
      $('.questions').empty();
      $('.questions').append(html);
      checkAnswer();
    }
 }
//Function for timer to count down while player is answering the question
function timerCountDown () {
    timerCountDown--;
    $("#timeRemaining").html('Time Remaining : ' + timerRemaining);
    if (timeRemaining ===0){
    console.log("Time's Up!");
   	stopTimer();
   	resetTimer();
   }   
}
//Function to stop the Timer
function stopTimer() {
	clearInterval(intervalTime);
   console.log(true);
}
//Function used to reset the timer for next game play
function resetTimer () {
	timerCountDown = 15;
	clearInterval(intervalTime);
	time = document.getElementByID("timeRemaining");
	IntervalTime = setInterval(timerCountDown, 1000);
	timerCountDown();
}
//Function to check player's answers' against correct answers 
function checkAnswer() {
    var answer = $('input[type=radio]:checked').val();
    console.log('answer', answer);
    if (answer === questions[index].answer) {
        alert('Right');
        question[index]++;
        correctAnswer++;
        setTimeOut(showMeQuestion, 1000 * 10);
        
    } else if (answer === undefined) {
        alert('Not Answered');
        question[index]++;
        unanswered++;
        setTimeOut(showMeQuestion, 1000 * 10);
        
    } else {
        alert ('Wrong');
        question[index]++;
        setTimeOut(showMeQuestion, 1000 * 10);
        gameOverResults();
    }
 }
function gameOverResults(){	
	$("#doneBtn").on("click", function() {
    if (correctAnswer < 6) {
    $('#totaScoreDiv').html('<ul><li>Correct Answer:' + numCorrect + '</li><li>Correct Answer:' + numWrong + '</li><li>Unanswered:' + numUnanswered + '</li></ul>' );
    alert('You Lose');
    } else if (correctAnswer == 6){
	  $('#totaScoreDiv').html('<ul><li>Correct Answer:' + numCorrect + '</li><li>Correct Answer:' + numWrong + '</li><li>Unanswered:' + numUnanswered + '</li></ul>' );
	  alert('You Win!');
      gameOverResults();
	} 
 }