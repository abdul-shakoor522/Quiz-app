// questions
const questions = [
    {
        question: 'What is the capital of France?', 
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Rome', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?', 
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'What is the largest mammal in the world?', 
        answers: [
            { text: 'Elephant', correct: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Giraffe', correct: false },
            { text: 'Great White Shark', correct: false }
        ]
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?', 
        answers: [
            { text: 'Charles Dickens', correct: false },
            { text: 'Mark Twain', correct: false },
            { text: 'William Shakespeare', correct: true },
            { text: 'Ernest Hemingway', correct: false }
        ]
    },
    {
        question: 'What is the chemical symbol for gold?', 
        answers: [
            { text: 'Au', correct: true },
            { text: 'Ag', correct: false },
            { text: 'Pb', correct: false },
            { text: 'Fe', correct: false }
        ]
    },
    {
        question: 'Which ocean is the largest?', 
        answers: [
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false },
            { text: 'Pacific Ocean', correct: true }
        ]
    },
    {
        question: 'What is the capital of Japan?', 
        answers: [
            { text: 'Beijing', correct: false },
            { text: 'Seoul', correct: false },
            { text: 'Tokyo', correct: true },
            { text: 'Bangkok', correct: false }
        ]
    },
    {
        question: 'Who is Imran Khan?', 
        answers: [
            { text: 'Ploice Officer', correct: true },
            { text: 'Politician', correct: false },
            { text: 'Business Man', correct: false },
            { text: 'Gold seller', correct: false }
        ]
    },
    {
        question: 'Which element has the atomic number 1?', 
        answers: [
            { text: 'Oxygen', correct: false },
            { text: 'Hydrogen', correct: true },
            { text: 'Carbon', correct: false },
            { text: 'Nitrogen', correct: false }
        ]
    },
    {
        question: 'What is the currency of the United Kingdom?', 
        answers: [
            { text: 'Euro', correct: false },
            { text: 'Pound Sterling', correct: true },
            { text: 'Dollar', correct: false },
            { text: 'Yen', correct: false }
        ]
    }
];

//selecting Elements
let question = document.querySelector('.question');
let answerBtn = document.querySelector('.ans-btn');
let next = document.querySelector('.next');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    next.innerHTML = 'Next';
    showQuestions();
}

function showQuestions() {
    resetSate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question.textContent = `${questionNo}. ${currentQuestion.question}`;
    question.style.fontSize = '20px';
    // console.log(currentQuestion.question);

    currentQuestion.answers.forEach((ans) => {
        let btn = document.createElement('button');
        // let answers = currentQuestion.answers;
        btn.innerHTML = ans.text;
        btn.style.padding = '15px 20px';
        btn.classList.add('ans-btn');
        answerBtn.appendChild(btn);
        if (ans.correct) {
            btn.dataset.correct = ans.correct;

        }
        btn.addEventListener('click', selectAnswer);
    })
}
function resetSate() {
    next.style.display = 'none';
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}
function selectAnswer(e) {
    // alert('hi')
    const selectedBtn = e.target;
    console.log(e.target.dataset);
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('in-correct');

    }
    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct == 'true') {
            button.classList.add('correct');
        }
        button.disabled = 'true';
    })
    next.style.display = 'block';
}
startQuiz();

function showScore() {
    resetSate();
    question.innerHTML = `You scored ${score} out of ${questions.length}`;
    next.innerHTML = 'Play Again!';
    next.style.display = 'block';
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestions();
    } else {
        showScore();
    }
}


next.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})
