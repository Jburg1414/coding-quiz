var timeEl = document.getElementById('timer');
var timeLeft = 75;
var timeInterval;
var startBtn = document.getElementById('start');
var quizEl = document.getElementById('quiz');
var welcomeMessage = document.getElementById('welcome-message');
var questionIndex = 0;
var quizQuestions = [
    {
        // question, choices, answers
        question: "Hello World",
        choices: [
            "option1", "option2", "option3","option4"
        ],
        answer: "option2"
    },
    {
        // question, choices, answers
        question: "Hello World",
        choices: [
            "option1", "option2", "option3","option4"
        ],
        answer: "option2"
    },
    {
        // question, choices, answers
        question: "Hello World",
        choices: [
            "option1", "option2", "option3","option4"
        ],
        answer: "option2"
    },
    {
        // question, choices, answers
        question: "Hello World",
        choices: [
            "option1", "option2", "option3","option4"
        ],
        answer: "option2"
    },
]

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

startBtn.addEventListener("click", function() {
    timerStart();
    welcomeMessage.classList.add("hidden");
    quizEl.classList.remove("hidden");
    startQuiz();
})

function startQuiz() {
    document.getElementById('question-text').textContent = quizQuestions[questionIndex].question;
    var answerBox = document.getElementById('answer-choices')
    answerBox.innerHTML = ""
    for (i=0; i < quizQuestions[questionIndex].choices.length; i++) {
        var btn = document.createElement("button");
        btn.textContent = quizQuestions[questionIndex].choices[i];
        answerBox.append(btn);
    }
}

