import './style/style.scss';

// All kod härifrån och ner är bara ett exempel för att komma igång

// I denna utils-fil har vi lagrat funktioner som ofta används, t.ex. en "blanda array"-funktion
import { shuffle } from './utils';

// I denna fil har vi lagrat vår "data", i detta exempel en ofullständig kortlek
import exampleCardDeck from './questionArray';

//////////////////////////////////////////

////////////////////////Start menu/////////////////////////
/*

 document.querySelector('.timeBtnPlay').addEventListener('click', timeBtnPlayFunction);
function timeBtnPlayFunction() {
 
	document.querySelector(".screenPlayTime").classList.remove("novisableScreen");
 	document.querySelector(".screenPlayMenu").classList.add("novisableScreen");
  
 currentQuestionIndex = 0;
  
 answer1Btn.addEventListener('change', checkAnswerTimeAttack);
 answer2Btn.addEventListener('change', checkAnswerTimeAttack);
 answer3Btn.addEventListener('change', checkAnswerTimeAttack);
 answer4Btn.addEventListener('change', checkAnswerTimeAttack);
  
 
 timeAttackQuestionFunction();
} 
function checkAnswerTimeAttack(e){
  const userAnswerTime = e.currentTarget.innerHTML;
const correctAnswerTime = questions[currentQuestion - 1].correctAnswer;
if (userAnswerTime === correctAnswerTime) {
 answerInformation.innerHTML = '';
 points++;
} 
} 

*/
////////////////////////////////////////////////////////////////////////////
// Spela knapp
	    
	    








const casualBtnPlay = document.querySelector('.casualBtnPlay');
const screenPlayMenu = document.querySelector('.screenPlayMenu');
const screenPlay = document.querySelector('.screenPlay');
const nextQuestionBtn = document.querySelector('.nextQuestionBtn');
const replayQuestionBtn = document.querySelector('.replayQuestionBtn');
const questionTextButton = document.querySelector('.questionTextButton');
const playAgain = document.getElementById("playAgain");
const timeTimer = document.querySelector('.time-timer');
const playBtn = document.querySelector('.playBtn');
const casualMathBtnPlay = document.querySelector('.casualMathBtnPlay');
const timer = document.getElementById('timer');
const buttons = document.querySelectorAll("button");
const highScoreDiv = document.querySelector('.highScoreDiv');
const highScoreh5 = document.querySelector('.highScoreh5');
const menuStart = document.querySelector('.menuStart');
const menuBtnBack = document.querySelector('.menuBtnBack');
const showAnswers = document.querySelector('#showAnswersBtn');
const showAnswersText = document.querySelector('#showAnswersText');
const highscoreCollect = document.querySelector('.highscoreCollect');
const correctAnswers = document.querySelector('.correctAnswers');
const wrongAnswers = document.querySelector('.wrongAnswers');
const correctAnswerArray = [];
const wrongAnswerArray = [];


document.querySelector(".menuBtnPlay").onclick = function menuBtnPlayFunction() {
	menuStart.classList.add('novisableScreen');
	screenPlayMenu.classList.remove('novisableScreen');
}

// Tillbaka
const casualPlayBackBtn = document.querySelector('.casualPlayBackBtn');
casualPlayBackBtn.onclick = function casualPlayBackBtnFunction() {
  location.reload();
};



// Casual Svenska
casualBtnPlay.addEventListener('click', startGame);
function startGame() {
  screenPlayMenu.classList.add('novisableScreen');
  screenPlay.classList.remove('novisableScreen');

	questions.sort(() => Math.random() - .5)
	
  for (let i = 0; i < questions.length; i++) {
  questions[i].answerOptions.sort(() => Math.random() - 0.5);
}
	currentQuestion = 0;

	casualNextBtnPlayFunction();
}

const questionTextDiv = document.querySelector('#questionText');
const answer1Btn = document.querySelector('#answer1');
const answer2Btn = document.querySelector('#answer2');
const answer3Btn = document.querySelector('#answer3');
const answer4Btn = document.querySelector('#answer4');


answer1Btn.addEventListener('click', checkAnswer);
answer2Btn.addEventListener('click', checkAnswer);
answer3Btn.addEventListener('click', checkAnswer);
answer4Btn.addEventListener('click', checkAnswer); 

let currentQuestion = 0;


function checkAnswer(e) {
  const userAnswer = e.currentTarget.innerHTML;
  const correctAnswer = questions[currentQuestion - 1].correctAnswer;
  const textInfo = questions[currentQuestion - 1].answerInfo;
  
 
  if (userAnswer === correctAnswer) {
    nextQuestionBtn.classList.remove('novisableScreen');
    document.body.style.backgroundColor = '#0A7802FF';
    answerInformation.innerHTML = textInfo;
  } else {
    answerInformation.innerHTML = '';
    document.body.style.backgroundColor = 'red';
    nextQuestionBtn.classList.add('novisableScreen');
  }
}

nextQuestionBtn.addEventListener('click', casualNextBtnPlayFunction);

function casualNextBtnPlayFunction() {
  document.body.style.backgroundColor = '#2c3e50';
  nextQuestion();
}

function nextQuestion() {
	if (currentQuestion >= questions.length) {
		gameOver();
    return;
	}
	nextQuestionBtn.classList.add('novisableScreen');
	answerInformation.innerHTML = '';


	questionTextDiv.innerHTML = questions[currentQuestion].questionText;
	answer1Btn.innerHTML = questions[currentQuestion].answerOptions[0];
	answer2Btn.innerHTML = questions[currentQuestion].answerOptions[1];
	answer3Btn.innerHTML = questions[currentQuestion].answerOptions[2];
	answer4Btn.innerHTML = questions[currentQuestion].answerOptions[3];

	currentQuestion++;

}

replayQuestionBtn.addEventListener('click', restartGame);
function restartGame() {
  questionTextButton.classList.remove('novisableScreen');
  replayQuestionBtn.classList.add('novisableScreen');
  playAgain.innerHTML = '';
  currentQuestion = 0;
  startGame();
}

function gameOver() {
  nextQuestionBtn.classList.add('novisableScreen');
  questionTextButton.classList.add('novisableScreen');
  replayQuestionBtn.classList.remove('novisableScreen');
  answerInformation.innerHTML = '';
  playAgain.innerHTML = 'Bra jobbat! Vill du köra en gång till?';
}
let points = 0;
// Casual time
casualMathBtnPlay.addEventListener('click', startGameTime);

function startGameTime() {

  screenPlay.classList.remove('novisableScreen');
  timeTimer.classList.remove('novisableScreen');
  screenPlayMenu.classList.add('novisableScreen');
  playBtn.classList.add('novisableScreen');

	questions.sort(() => Math.random() - .5)

	questions.forEach(question => {
		question.answerOptions.sort(() => Math.random() - 0.5)
	});

	currentQuestionIndex = 0;

	answer1Btn.addEventListener('click', checkAnswerTime);
	answer2Btn.addEventListener('click', checkAnswerTime);
	answer3Btn.addEventListener('click', checkAnswerTime);
	answer4Btn.addEventListener('click', checkAnswerTime);

	time = setInterval(myTimer, 1000);
	timeQuestionFunction();
}
let sec = 50;

function myTimer() {
	timer.innerHTML = sec + ' sekunder';
  sec--;
  if (sec == -1) {
    clearInterval(time);
    alert('Tiden är slut!');
    gameOverTime();
  }
}



function checkAnswerTime(e) {
  const userAnswerTime = e.currentTarget.innerHTML;
  const correctAnswerTime = questions[currentQuestion - 1].correctAnswer;
  const correctQuestionText= questions[currentQuestion -1].questionText;
  if (userAnswerTime === correctAnswerTime) {
 
correctAnswerArray.push(correctQuestionText);
 // console.log(correctAnswerArray);
    answerInformation.innerHTML = '';
    points++;
  } else {
    wrongAnswerArray.push(correctQuestionText);
   // console.log(wrongAnswerArray);
  }

  setTimeout(delay, 2000);
   buttons.forEach(button => button.disabled = true);
}

function delay() {
  buttons.forEach(button => button.disabled = false);
  
  timeQuestionFunction();
}

function timeQuestionFunction() {
	if (currentQuestion >= questions.length) {
		gameOverTime();
		return;
	}
  
	document.body.style.backgroundColor = '#2c3e50';
	questionTextDiv.innerHTML = questions[currentQuestion].questionText;

	answer1Btn.innerHTML = questions[currentQuestion].answerOptions[0];
	answer2Btn.innerHTML = questions[currentQuestion].answerOptions[1];
	answer3Btn.innerHTML = questions[currentQuestion].answerOptions[2];
	answer4Btn.innerHTML = questions[currentQuestion].answerOptions[3];

	currentQuestion++; 

}

function gameOverTime() {

	const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Lägger till poängen till highScores
	highScores.push(points);

	// Sorterar i storleksordning
	highScores.sort((a, b) => b - a);

	// Sparar top 10
	highScores.splice(10);

	// Sparar highScore till local storage
	localStorage.setItem("highScores", JSON.stringify(highScores));

	
	highScoreh5.innerHTML = `<h5>Highscore:</h5>`;
	for (let i = 0; i < highScores.length; i++) {
		highScoreDiv.innerHTML += `<li class="highScoreLi"><span class="rankHighscore">#${i + 1}</span><span class="pointsHighscore"> ${highScores[i]} poäng</span></li>`;
	}
	document.body.style.backgroundColor = '#2c3e50';
	nextQuestionBtn.classList.add('novisableScreen');
	questionTextButton.classList.add('novisableScreen');
	timeTimer.classList.add('novisableScreen');
	replayQuestionBtn.classList.remove('novisableScreen');
    showAnswers.classList.remove('novisableScreen');
	sec = -2;
	playAgain.innerHTML = `Du fick ${points} rätt av ${questions.length} möjliga!`;

}

showAnswers.addEventListener('click', showQuestions);

function showQuestions(){

    showAnswers.classList.add('novisableScreen');
    highscoreCollect.classList.add('novisableScreen');
    playAgain.classList.add('novisableScreen');
    showAnswersText.classList.remove('novisableScreen');

     for (let i = 0; i < correctAnswerArray.length; i++) {
        correctAnswers.innerHTML+= `<li><span>${correctAnswerArray[i]}</span></li>`;
    }
    for (let i = 0; i < wrongAnswerArray.length; i++) {
       wrongAnswers.innerHTML+= `<li><span>${wrongAnswerArray[i]}</span></li>`;
    }
}


// Tillbaka
menuBtnBack.onclick = function menuBtnBackFunction() {
	screenPlayMenu.classList.add('novisableScreen');
	menuStart.classList.remove('novisableScreen');
}