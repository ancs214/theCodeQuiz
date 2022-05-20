//declare DOM object references

let containerEl = document.querySelector("#textContainer");
let questionEl = document.querySelector("#question");
let btnContainerEl = document.querySelector("#btnContainer");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");




//start quiz button click: timer starts 
let min = 60;
let counter = 6 * min;
let startCountdown = setInterval(countdown, 1000);
window.onload = countdown();
function countdown() {
    // console.log(counter);
    counter--;
    //timer reaches 0, end game function called
    if (counter === 0) {
        clearInterval(startCountdown);
        // window.location = "quiz-end.html";
    }
}



let questions = [
    {
        question1: 'Commonly used data types do not include: ',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: C 
    },
    {
        question1: 'The condition in an if/else statement is enclosed with ______',
        choices: ['quotes', 'curly brackets', 'square brackets', 'parentheses'],
        answer: A
    },
    {
        question1: 'String values must be enclosed in ______  when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: A
    },
    {
        question1: 'Arrays in Javascript can be used...',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: A
    },
    {
        question1: 'A very useful tool used during development for debugging and printing content to the debugger is...',
        choices: ['Javascript', 'terminal/bash', 'for loops', 'console.log' ],
        answer: A
    },
]

//correct answer button click: next question page presents and notification of 'correct' pops up on new page at bottom with border styling
//incorrect answer button click: next questions page presents and notification of 'incorrect' pops up on new page at bottom with border styling, time is also subtracted from clock
//repeat this pattern for all questions

//last question complete  timer reaches 0, end game: All done! page presents, final score posted, submit form for initials, and 'correct'/'incorrect pops up with border styling
//initials and score saved to 'high scores'

//on submit button click: highscores are posted, 'go back' button and 'clear highscores' button presents
//'go back' button restarts quiz
//'clear highscores' erases memory of highscores

btnContainerEl.addEventListener("click", function() {
question2();
});







// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// function(let functionsArray = [
//     {
//         question: "The condition in an if / else statement is enclosed within ____.",
//         answers: {
//             1: "quotes",
//             2: "curly brackets",
//             3: "parentheses",
//             4: "square brackets"
//         }
//     },
//     {
//         question: "Arrays in JavaScript can be used to store ____.",
//         answers: {
//             1: "numbers and strings",
//             2: "other arrays",
//             3: "booleans",
//             4: "all of the above"
//         }
//     },
//     {
//         question: "String values must be enclosed within ____ when being assigned to variables.",
//         answers: {
//             1: "commas",
//             2: "curly brackets",
//             3: "quotes",
//             4: "parentheses"
//         }
//     },
// ]

// console.log(functionsArray[0].answers[1]);



// let question2 = function() {
//     let question = "The condition in an if / else statement is enclosed within ____.";
//     questionEl.innerHTML = question;
//     btn1.innerHTML = "1. quotes";
//     btn2.innerHTML = "2. curly brackets";
//     btn3.innerHTML = "3. parentheses";
//     btn4.innerHTML = "4. square brackets";
// };
// let question3 = function() {
//     let question = "Arrays in JavaScript can be used to store ____.";
//     questionEl.innerHTML = question;
//     btn1.innerHTML = "1. numbers and strings";
//     btn2.innerHTML = "2. other arrays";
//     btn3.innerHTML = "3. booleans";
//     btn4.innerHTML = "4. all of the above";
// };
// let question4 = function() {
//     let question = "String values must be enclosed within ____ when being assigned to variables.";
//     questionEl.innerHTML = question;
//     btn1.innerHTML = "1. commas";
//     btn2.innerHTML = "2. curly brackets";
//     btn3.innerHTML = "3. quotes";
//     btn4.innerHTML = "4. parentheses";
// }