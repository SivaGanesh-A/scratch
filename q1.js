const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Michelangelo", "Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
        correctAnswer: "Leonardo da Vinci"
    }
];

function createQuiz() {
    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = "";

    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `<p>${index + 1}. ${question.question}</p>`;

        const optionsDiv = document.createElement("div");
        optionsDiv.classList.add("options");

        question.options.forEach(option => {
            const optionRadio = document.createElement("input");
            optionRadio.type = "radio";
            optionRadio.name = `question${index}`;
            optionRadio.value = option;

            const optionLabel = document.createElement("label");
            optionLabel.htmlFor = `option${index}`;
            optionLabel.textContent = option;

            optionsDiv.appendChild(optionRadio);
            optionsDiv.appendChild(optionLabel);
            optionsDiv.appendChild(document.createElement("br"));
        });

        questionDiv.appendChild(optionsDiv);
        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    const resultDiv = document.getElementById("result");
    let score = 0;

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === question.correctAnswer) {
            score++;
        }
    });
    resultDiv.textContent = `Your score: ${score} out of ${questions.length}`;
    if (score >= 3) {
        resultDiv.textContent +=`----------------->Badge:your badge is Congratulation, you got Gold Badge`;
    } else if (score >= 2) {
        resultDiv.textContent +=`----------------->Badge:your badge is Hurray, you got Silver Badge`;
    } else {
        resultDiv.textContent +=`----------------->Badge:your badge is Focus more on this Subject`;
    }
}
createQuiz();
