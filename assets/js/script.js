//Variables
var welcome = document.querySelector("#introduction");
var startBtn = document.querySelector("#start_button");
var introPage =document.querySelector("#intro_page");

var questionPage = document.querySelector("#questions_page");
var askQuestion = document.querySelector("#questions");

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