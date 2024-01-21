const questions = [

    {
        question: "Which of the following is considered a tangible asset?",
        answers: [
            { text: "Stocks", correct: false},
            { text: "Bonds", correct: false},
            { text: "Real Estate", correct: true},
            { text: "Mutual Fonds", correct: false},
        ]
    },
    {
        question: "What is inflation?",
        answers: [
            { text: "The increase in the value of money over time", correct: false},
            { text: "The decrease in the overall price level of goods and services", correct: false},
            { text: "The rate at which the general level of prices for goods and services rises", correct: true},
            { text: "The measure of a country's total economic output", correct: false},
        ]
    },
    {
     
        question: "What is the purpose of investing in inflation-adjusted assets?",
        answers: [
            { text: "To guarantee high returns", correct: false},
            { text: "To protect against the eroding effects of inflation", correct: true},
            { text: "To avoid all investment risks", correct: false},
            { text: "To achieve short-term gains", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

startQuiz();