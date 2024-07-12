const startButton = document.getElementById('start-game');
const gameContainer = document.getElementById('game-container');
const questionContainer = document.getElementById('question-container');
const answerInput = document.getElementById('answer-input');
const submitAnswerButton = document.getElementById('submit-answer');
const playAgainButton = document.getElementById('play-again');

let questions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

startButton.addEventListener('click', startGame);
submitAnswerButton.addEventListener('click', submitAnswer);
playAgainButton.addEventListener('click', playAgain);

function startGame() {
    startButton.classList.add('hidden');
    gameContainer.style.display = 'flex';
    generateQuestions();
    showQuestion();
}

function generateQuestions() {
    for (let i = 0; i < 4; i++) {
        const num1 = Math.floor(Math.random() * 90) + 10;
        const num2 = Math.floor(Math.random() * 90) + 10;
        const operation = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
        const question = `${num1} ${operation} ${num2}`;
        questions.push({
            question: question,
            answer: eval(question)
        });
    }
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionContainer.textContent = questions[currentQuestionIndex].question;
    } else {
        endGame();
    }
}

function submitAnswer() {
    const userAnswer = parseFloat(answerInput.value);
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    currentQuestionIndex++;
    answerInput.value = '';
    showQuestion();
}

function endGame() {
    questionContainer.textContent = `Siz ${correctAnswers} ta savolga to'g'ri javob berdingiz, ${incorrectAnswers} ta savolga esa xato javob berdingiz.`;
    answerInput.classList.add('hidden');
    submitAnswerButton.classList.add('hidden');
    playAgainButton.classList.remove('hidden');
}

function playAgain() {
    questions = [];
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    startButton.classList.remove('hidden');
    gameContainer.style.display = 'none';
    answerInput.classList.remove('hidden');
    submitAnswerButton.classList.remove('hidden');
    playAgainButton.classList.add('hidden');
}
