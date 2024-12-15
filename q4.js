const questions = [
    {
        question:"Which of the following is NOT a valid data type in Python?",
        options: ["int","float","char","bool"],
        correctAnswer: "char"
    },
    {
        question:"How do you define a single-line comment in Python",
          options: [" /* This is a comment */","// This is a comment","# This is a comment","This is a comment"],
          correctAnswer:"# This is a comment"
    },
    {
        question:"What is the output of the following code? x = 5 y = 2 print(x // y) ",
        options: ["2.5","2","3","2.0"],
        correctAnswer: "2"
    },
    {
      question:"Which keyword is used to define a function in Python?",
      options:["func","define","function","def"],
      correctAnswer:"def"
    
    },
    {
      question:"What does the following code snippet do?for i in range(5):print(i)",
      options:["prints the numbers 1 to 5","Prints the numbers 0 to 4","Prints the number 5","Prints an error"],
      correctAnswer:" Prints the numbers 0 to 4"
  
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
        const selectedOption = `document.querySelector(input[name="question${index}"]:checked)`;
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
  }``
  
  createQuiz();