const questionElement = document.getElementById('question');
const optionsElement = 

document.querySelectorAll('label');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: 0
    },
  
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.forEach((option, index) => {
        option.textContent = 

currentQuestion.options[index];
    });
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const userAnswer = parseInt(selectedAnswer.id.slice(-1)) - 1;
        if (userAnswer === quizData[currentQuestionIndex].correctAnswer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Please select an answer.");
    }
}


function showResult() {
    resultElement.textContent = `Quiz completed! Your score is ${score} out of ${quizData.length}`;
    submitButton.disabled = true;
}

loadQuestion();
submitButton.addEventListener('click', checkAnswer);