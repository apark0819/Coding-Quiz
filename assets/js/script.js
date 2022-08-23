//Variables
var welcome = document.querySelector("#introduction");
var startBtn = document.querySelector("#start_button");
var introPage =document.querySelector("#intro_page");

var questionPage = document.querySelector("#question_page");
var askQuestion = document.querySelector("#ask_question");

var reactButtons = document.querySelectorAll(".choices");
var answerBtn1 = document.querySelector("#answer_btn1");
var answerBtn2 = document.querySelector("#answer_btn2");
var answerBtn3 = document.querySelector("#answer_btn3");
var answerBtn4 = document.querySelector("#answer_btn4");

var checkLine = document.querySelector("#question_checker");
var scoreBoard = document.querySelector("#results_page");
var finalScore = document.querySelector("#score");
var userInitial =document.querySelector("#user-name");

var submitBtn =document.querySelector("#submit_btn");
var highScorePage =document.querySelector("#score_page");
var scoreRecord =document.querySelector("#high_score");
var scoreCheck =document.querySelector("#score_check");
var finish =document.querySelector("#fin");

var backBtn =document.querySelector("#back_btn");
var clearBtn=document.querySelector("#clear_btn");

// Questions
var testQuestions = [
    {
        question: "Questions 1 : What does HTML stand for?",
        choices: ["a. HTML", "b. HTMLL", "c. The HyperText Markup Language", "d. HTMLLL"],
        answer: "c"
    },
    {
        question: "Questions 2 : What does CSS stand for?",
        choices: ["a. CSS", "b. CSSS", "c. Cascading Style Sheets", "d. CCSS"],
        answer: "c"
    },
    {
        question: "Questions 3 : What does JS stand for?",
        choices: ["a. JS", "b. JavaScript", "c. JJS", "d. JJJSSS()"],
        answer: "b"
    },
    {
        question: "Questions 4 : What is 1 + 1?",
        choices: ["a. 0 ", "b. 1 ", "c. 2", "d. 3"],
        answer: "c"
    },
    {
        question: "Questions 5 : What is 2 - 1?",
        choices: ["a. 0", "b. 1", "c. 2", "d. 3"],
        answer: "b"
    },
   
];

var timeLeft = document.getElementById("timer");

var secondsLeft = 60;
var questionNumber = 0;
var totalScore = 0;
var questionCount = 1;

function countdown() {
        
    var timerInterval = setInterval(function () {

      secondsLeft--;
      timeLeft.textContent = "Time left: " + secondsLeft + " s";

        if (secondsLeft <= 0){
            clearInterval(timerInterval);
            timeLeft.textContent = "Time is up!"; 
            finish.textContent = "Time is up!";
            gameOver();

        } else  if(questionCount >= testQuestions.length +1) {
            clearInterval(timerInterval);
            gameOver();
            } 
    }, 1000);
}

function startQuiz () {
    introPage.style.display = "none";
    questionPage.style.display = "block";
    questionNumber = 0
    countdown();
    showQuestion(questionNumber);
  
}

function showQuestion (n) {
    askQuestion.textContent = testQuestions[n].question;
    answerBtn1.textContent = testQuestions[n].choices[0];
    answerBtn2.textContent = testQuestions[n].choices[1];
    answerBtn3.textContent = testQuestions[n].choices[2];
    answerBtn4.textContent = testQuestions[n].choices[3];
    questionNumber = n;
}

function checkAnswer(event) {
    event.preventDefault();
    checkLine.style.display = "block";
    setTimeout(function () {
        checkLine.style.display = 'none';
    }, 1000);

    if (testQuestions[questionNumber].answer == event.target.value) {
        checkLine.textContent = "Correct!"; 
        totalScore = totalScore + 1;

    } else {
        secondsLeft = secondsLeft - 10;
        checkLine.textContent = "Wrong! The correct answer is " + testQuestions[questionNumber].answer + " .";
    }
    if (questionNumber < testQuestions.length -1 ) {
        showQuestion(questionNumber +1);
    } else {
    gameOver();
}
questionCount++;
}

function gameOver() {

    questionPage.style.display = "none";
    scoreBoard.style.display = "block";
    console.log(scoreBoard);
    // show final score
    finalScore.textContent = "Your final score is :" + totalScore ;
    // clearInterval(timerInterval);  
    timeLeft.style.display = "none"; 
};

function getScore () {
    var currentList =localStorage.getItem("ScoreList");
    if (currentList !== null ){
        freshList = JSON.parse(currentList);
        return freshList;
    } else {
        freshList = [];
    }
    return freshList;
};

function renderScore () {
    scoreRecord.innerHTML = "";
    scoreRecord.style.display ="block";
    var highScores = sort();   
    var topFive = highScores.slice(0,5);
    for (var i = 0; i < topFive.length; i++) {
        var item = topFive[i];
    var li = document.createElement("li");
    li.textContent = item.user + " - " + item.score;
    li.setAttribute("data-index", i);
    scoreRecord.appendChild(li);
    }
};

function sort () {
    var unsortedList = getScore();
    if (getScore == null ){
        return;
    } else{
    unsortedList.sort(function(a,b){
        return b.score - a.score;
    })
    return unsortedList;
}};

function addItem (n) {
    var addedList = getScore();
    addedList.push(n);
    localStorage.setItem("ScoreList", JSON.stringify(addedList));
};

function saveScore () {
    var scoreItem ={
        user: userInitial.value,
        score: totalScore
    }
    addItem(scoreItem);
    renderScore();
}


startBtn.addEventListener("click", startQuiz);

reactButtons.forEach(function(click){

    click.addEventListener("click", checkAnswer);
});
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    scoreBoard.style.display = "none";
    introPage.style.display = "none";
    highScorePage.style.display = "block";
    questionPage.style.display ="none";
    saveScore();
});

//score 
scoreCheck.addEventListener("click", function(event) {
    event.preventDefault();
    scoreBoard.style.display = "none";
    introPage.style.display = "none";
    highScorePage.style.display = "block";
    questionPage.style.display ="none";
    renderScore();
});

//main page back
backBtn.addEventListener("click",function(event){
        event.preventDefault();
        scoreBoard.style.display = "none";
        introPage.style.display = "block";
        highScorePage.style.display = "none";
        questionPage.style.display ="none";
        location.reload();
});

clearBtn.addEventListener("click",function(event) {
    event.preventDefault();
    localStorage.clear();
    renderScore();
});