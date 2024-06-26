const quiz = [
    {
        question: "4, 9, 16, 25, 36, ?, 64",
        options: ["49", "94", "42", "43"],
        answer: "49"
    },
    {
        question: "Which four letter word can be attached to the beginning of the following words to form five longer words? \n AGE, WIDTH, IT, STAND, WAGON",
        options: ["BAND", "SAND", "ANTI", "HOST"],
        answer: "BAND"
    },
    {
        question: "What is the number that is one more than one-tenth of one-fifth of one-half of 4,000?",
        options: ["41", "42", "40", "402"],
        answer: "41"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
        answer: "Mitochondria"
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        answer: "2"
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["100°C", "0°C", "-100°C", "50°C"],
        answer: "100°C"
    },
    {
        question: "What is the opposite of the antonym for the word used to describe someone who isn't very smart.",
        options: ["Genius", "Smarty Pants", "Civilian", "Idiot"],
        answer: "5"
    },
    {
        question: "What is the chemical symbol for iron?",
        options: ["I", "Ir", "Fe", "In"],
        answer: "Fe"
    },
    {
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        answer: "6"
    },
    {
        question: "What is 3 to the power of 2?",
        options: ["6", "9", "12", "15"],
        answer: "9"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Cu", "Fe"],
        answer: "Au"
    },
    {
        question: "What is 5 times 4?",
        options: ["10", "15", "20", "25"],
        answer: "20"
    },
    {
        question: "What is 100 divided by 10?",
        options: ["10", "20", "30", "40"],
        answer: "10"
    },
    {
        question: "What is the square root of 64?",
        options: ["4", "6", "8", "10"],
        answer: "8"
    },
    {
        question: "What is the sum of the angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        answer: "180°"
    },
    {
        question: "What is the chemical symbol for hydrogen?",
        options: ["Hg", "He", "H", "Ho"],
        answer: "H"
    },
    {
        question: "What is 4 times 3?",
        options: ["10", "12", "14", "16"],
        answer: "12"
    },
    {
        question: "What is the chemical symbol for oxygen?",
        options: ["O", "C", "O2", "H2O"],
        answer: "O"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
        answer: "Jupiter"
    },
    {
        question: "What is the chemical symbol for helium?",
        options: ["He", "H", "Hu", "Hee"],
        answer: "He"
    },
    {
        question: "What is 50 divided by 2?",
        options: ["20", "25", "30", "35"],
        answer: "25"
    },
    {
        question: "What is the chemical symbol for carbon?",
        options: ["C", "Ca", "Co", "Cb"],
        answer: "C"
    },
    {
        question: "What is 9 minus 3?",
        options: ["3", "4", "5", "6"],
        answer: "6"
    },
    {
        question: "What is the chemical symbol for nitrogen?",
        options: ["Ni", "Na", "N", "Nb"],
        answer: "N"
    },
    {
        question: "What is 12 divided by 4?",
        options: ["2", "3", "4", "5"],
        answer: "3"
    },
    {
        question: "What is the chemical symbol for silver?",
        options: ["Si", "Ag", "Au", "Sr"],
        answer: "Ag"
    },
    {
        question: "What is 15 plus 10?",
        options: ["20", "25", "30", "35"],
        answer: "25"
    },
    {
        question: "What is the chemical symbol for potassium?",
        options: ["K", "Ka", "Kt", "Kn"],
        answer: "K"
    },
    {
        question: "What is 8 times 7?",
        options: ["48", "54", "56", "64"],
        answer: "56"
    },
    {
        question: "What is the chemical symbol for sodium?",
        options: ["Na", "Nb", "No", "Nm"],
        answer: "Na"
    },
    {
        question: "What is 2 to the power of 3?",
        options: ["4", "6", "8", "10"],
        answer: "8"
    },
    {
        question: "What is 18 divided by 3?",
        options: ["4", "5", "6", "7"],
        answer: "6"
    },
    {
        question: "What is the chemical symbol for magnesium?",
        options: ["Mg", "Ma", "Mo", "Me"],
        answer: "Mg"
    },
    {
        question: "What is 7 times 9?",
        options: ["56", "63", "64", "70"],
        answer: "63"
    },
    {
        question: "What is the chemical symbol for calcium?",
        options: ["Ca", "Ce", "C", "Cu"],
        answer: "Ca"
    },
    {
        question: "What is 24 divided by 6?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
        answer: "Tokyo"
    },
    {
        question: "What gets wet while drying?",
        options: ["Towel", "Umbrella", "Sun", "Rain"],
        answer: "Towel"
    },
    {
        question: "If all Bloops are Razzies, and all Razzies are Lazzies, then all Bloops are definitely Lazzies.",
        options: ["True","False"],
        answer: "True"
    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

shuffleQuestions();
loadQuestion();

function shuffleQuestions() {
    for (let i = quiz.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
}

function loadQuestion() {
    const currentQuestion = quiz[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.classList.add("option");
        optionButton.addEventListener("click", () => selectOption(optionButton, option));
        optionsElement.appendChild(optionButton);
    });
}

function selectOption(optionButton, selectedAnswer) {
    const allOptions = optionsElement.querySelectorAll(".option");
    allOptions.forEach((opt) => {
        opt.classList.remove("selected");
    });

    optionButton.classList.add("selected");
    submitButton.disabled = false;

    // Check answer
    const currentQuestion = quiz[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
        score++;
    }
}

submitButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        loadQuestion();
        submitButton.disabled = true;
    } else {
        showResult();
    }
});

function showResult() {
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
    submitButton.style.display = "none";
    
    let message = "";
    if (score >= quiz.length * 0.9) {
        message = "Congratulations! You scored high. You are probably gifted.";
    } else if (score >= quiz.length * 0.4) {
        message = "You are average! Your score was in the range of an average person's capabilities.";
    } else {
        message = "You need help. You scored awfully low.";
    }
    resultElement.textContent = message;
}
