const questions = [
    {
        question:"What is the correct syntax for declaring a pointer to an integer in C?",
        options: ["int *ptr", "*int ptr", "int &ptr", "*ptr int"],
        correctAnswer: "int *ptr"
    },
    {
        question:"Which of the following is NOT a valid C data type?",
        options: ["float","char","Boolean","double"],
        correctAnswer: "Boolean"
    },
    {
        question:"What is the purpose of the main() function in a C program?",
        options: ["To define variables","To handle input/output","To be the entry point of the program","To declare functions"],
        correctAnswer: "To be the entry point of the program"
    },
    {
      question:"What does the %d format specifier represent in printf() and scanf() functions?",
      options:[" Character","Float","Integer","String"],
      correctAnswer:"Integer"
    
    },
    {
      question:"Which operator is used to increment the value of a variable by 1?",
      options:["++","--","","/"],
      correctAnswer:"++"
  
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
  }
  
  createQuiz();