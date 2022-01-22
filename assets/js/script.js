var timeEl = document.getElementById('timer');
var timeLeft = 75;
var timeInterval;
var startBtn = document.getElementById('start');
var quizEl = document.getElementById('quiz');
var welcomeMessage = document.getElementById('welcome-message');
var questionIndex = 0;
var quizQuestions = [
    {
        // question, choices, answer
        question: "Commonly used data types DO NOT include:",
        choices: [
            "1. Strings", "2. Booleans", "3. Alerts","4. Numbers"
        ],
        answer: "3. Alerts"
    },
    {
        // question, choices, answer
        question: "The condition in an if/else statement is enclosed with ______.",
        choices: [
            "1. Quotes", "2. Curly Brackets", "3. Parenthesis","4. Square Brackets"
        ],
        answer: "3. Parenthesis"
    },
    {
        // question, choices, answer
        question: "Arrays in JavaScript can be used to store _______.",
        choices: [
            "1. Numbers and Strings", "2. Other Arrays", "3. Booleans","4. All of the above"
        ],
        answer: "4. All of the above"
    },
    {
        // question, choices, answer
        question: "String values must be enclosed within _______ when being assigned to variables.",
        choices: [
            "1. Commas", "2. Curly Brackets", "3. Quotes","4. Parenthesis"
        ],
        answer: "3. Quotes"
    },
    {
        // question, choices, answer
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
            "1. JavaScript", "2. Terminal/Bash", "3. For Loops","4. Console Log"
        ],
        answer: "4. Console Log"
    },
]

// function to start timer and count down by 1 second
function timerStart() {
    timeInterval = setInterval(function(){
        if (timeLeft > 1) {
            timeLeft--;
            timeEl.textContent = "Time: " + timeLeft + "sec";
        } else {
            clearInterval(timeInterval);
            timeEl.textContent = "Time: 0 sec.";            
        }
    }, 1000);
}

// when button is clicked start timer and start quiz
startBtn.addEventListener("click", function() {
    timerStart();
    welcomeMessage.classList.add("hidden");
    quizEl.classList.remove("hidden");
    startQuiz();
})


// function to start quiz and cycle through questions
function startQuiz() {
    document.getElementById('question-text').textContent = quizQuestions[questionIndex].question;
    var answerBox = document.getElementById('answer-choices')
    answerBox.innerHTML = ""
    for (i=0; i < quizQuestions[questionIndex].choices.length; i++) {
        var btn = document.createElement("button");
        btn.textContent = quizQuestions[questionIndex].choices[i];
        answerBox.append(btn);
    }

    if 
}

