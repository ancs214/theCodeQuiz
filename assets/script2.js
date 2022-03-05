//declare DOM object references

let containerEl = document.querySelector("#textContainer");
let questionEl = document.querySelector("#question");
let btnContainerEl = document.querySelector("#btnContainer");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let timerEl = document.querySelector("#timer");

let questionsArrayIndex = 0;



//start quiz button click: timer starts 

let counter = 75;
let startCountdown = setInterval(countdown, 1000);
window.onload = countdown();
function countdown() {
    // console.log(counter);
    counter--;
    timerEl.textContent = counter;
    //timer reaches 0, end game function called
    if (counter === 0) {
        clearInterval(startCountdown);
        // window.location = "quiz-end.html";
    }
}



let questionsArray = [
    // {
    //     question: "Commonly used data types DO NOT include: ",
    //     choices: [
    //         "strings",
    //         "booleans",
    //         "alerts",
    //         "numbers",
    //     ]
    // },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: [
            "quotes",
            "curly brackets",
            "parentheses",
            "square brackets,"
        ],
        answer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above",
    ],
        answer: "all of the above",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: [
            "commas",
            "curly brackets",
            "quotes",
            "parentheses",
        ],
        answer: "quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choices: [
            "Javascript",
            "terminal/bash",
            "for loops",
            "console.log",
        ],
        answer: "console.log",
    }
]


function getQuestion() {
    //set currentQuestion from questionArray
    let currentQuestion = questionsArray[questionsArrayIndex];
    questionEl.textContent = currentQuestion.question;
    //set choices from questionArray
    console.log(currentQuestion.choices);
}


btnContainerEl.addEventListener("click", function() {
    getQuestion();
});





