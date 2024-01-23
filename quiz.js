const questions = [

    {
        question: "Which of the following is considered a tangible asset?",
        answers: [
            { text: "Stocks", correct: false },
            { text: "Bonds", correct: false },
            { text: "Real Estate", correct: true },
            { text: "Mutual Fonds", correct: false },
        ]
    },
    {
        question: "What is inflation?",
        answers: [
            { text: "The increase in the value of money over time", correct: false },
            { text: "The decrease in the overall price level of goods and services", correct: false },
            { text: "The rate at which the general level of prices for goods and services rises", correct: true },
            { text: "The measure of a country's total economic output", correct: false },
        ]
    },
    {

        question: "What is the purpose of investing in inflation-adjusted assets?",
        answers: [
            { text: "To guarantee high returns", correct: false },
            { text: "To protect against the eroding effects of inflation", correct: true },
            { text: "To avoid all investment risks", correct: false },
            { text: "To achieve short-term gains", correct: false },
        ]
    },
    {
        question: "What is diversification in investing?",
        answers: [
            { text: "Investing in a single asset class", correct: false },
            { text: "Spreading investments across different asset classes to reduce risk", correct: true },
            { text: "Investing only in real estate", correct: false },
            { text: "Putting all your money in one stock", correct: false },
        ]
    },
    {
        question: "What is the Canadian equivalent of the 401(k) retirement account?",
        answers: [
            { text: "Registered Education Savings Plan (RESP)", correct: false },
            { text: "Registered Retirement Income Fund (RRIF)", correct: false },
            { text: "Tax-Free Savings Account (TFSA)", correct: false },
            { text: "Registered Retirement Savings Plan (RRSP)", correct: true },
        ]
    },
    {
        question: "What does the term 'ROI' stand for in finance?",
        answers: [
            { text: "Return on Investment", correct: true },
            { text: "Rate of Interest", correct: false },
            { text: "Risk of Inflation", correct: false },
            { text: "Revenue on Investment", correct: false },
        ]
    },
    {
        question: "Why might someone choose a Roth IRA over a Traditional IRA?",
        answers: [
            { text: "Contributions are tax-deductible", correct: false },
            { text: "Earnings grow tax-free, and qualified withdrawals are tax-free", correct: true },
            { text: "There are no contribution limits", correct: false },
            { text: "Withdrawals are required after a certain age", correct: false },
        ]
    },
    {
        question: "What is the purpose of diversification in investment?",
        answers: [
            { text: "To put all your money in one investment for higher returns", correct: false },
            { text: "To reduce risk by spreading investments across different assets", correct: true },
            { text: "To minimize taxes on investment gains", correct: false },
            { text: "To ensure quick liquidity of investments", correct: false },
        ]
    },
    {
        question: "What is a credit score used for?",
        answers: [
            { text: "To measure the number of credit cards a person has", correct: false },
            { text: "To evaluate a person's ability to save money", correct: false },
            { text: "To assess a person's creditworthiness for loans and credit cards", correct: true },
            { text: "To determine a person's income level", correct: false },
        ]
    },
    {
        question: "What is the purpose of an emergency fund?",
        answers: [
            { text: "To fund luxurious vacations", correct: false },
            { text: "To cover unexpected expenses and financial emergencies", correct: true },
            { text: "To invest in high-risk assets", correct: false },
            { text: "To save for long-term financial goals", correct: false },
        ]
    },
    {
        question: "What does the term 'compound interest' refer to?",
        answers: [
            { text: "Interest calculated only on the initial principal amount", correct: false },
            { text: "Interest earned on interest, in addition to the original principal", correct: true },
            { text: "Interest paid on loans", correct: false },
            { text: "Interest rates set by central banks", correct: false },
        ]
    },
    {
        question: "Which of the following is a type of insurance that provides income replacement when unable to work due to illness or injury?",
        answers: [
            { text: "Life Insurance", correct: false },
            { text: "Home Insurance", correct: false },
            { text: "Disability Insurance", correct: true },
            { text: "Auto Insurance", correct: false },
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let questionsAnswered = 0;
let score = 0;
let questionNo = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  questionsAnswered = 0;
  score = 0;
  questionNo = 0;
  nextButton.innerHTML = "Next";
  shuffleQuestions(); // Shuffle the questions before showing the first one
  showQuestion();
}

function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionNo++;
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    questionsAnswered++;
    if (questionsAnswered < 5) {
      nextButton.style.display = "block";
    } else {
      showScore();
    }
  }

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    handleNextButton();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${5}!`;
  nextButton.innerHTML = "Restart";
  nextButton.style.display = "block";
  nextButton.removeEventListener("click", handleNextButton);
  nextButton.addEventListener("click", startQuiz); // Add event listener to restart button
}

startQuiz();