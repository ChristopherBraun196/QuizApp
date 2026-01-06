let questions = [
  {
    question: "Wofür wird JavaScript hauptsächlich im Web genutzt?",
    answer_1: "Für das Styling von Webseiten",
    answer_2: "Für interaktive und dynamische Inhalte",
    answer_3: "Für die Struktur einer Webseite",
    answer_4: "Für das Hosting von Webseiten",
    right_answer: 2,
  },
  {
    question: "Welcher der folgenden ist ein primitive Datentyp in JavaScript?",
    answer_1: "Objekt",
    answer_2: "Array",
    answer_3: "String",
    answer_4: "Function",
    right_answer: 3,
  },
  {
    question: "Warum nutzt man const bevorzugt in JavaScript?",
    answer_1: "Weil es schneller ist",
    answer_2: "Weil der Wert immer automatisch geändert wird",
    answer_3: "Weil es unbeabsichtigte Änderungen verhindert",
    answer_4: "Weil es nur für Zahlen funktioniert",
    right_answer: 3,
  },
  {
    question: "Wofür werden Bedingungen (if / else) verwendet?",
    answer_1: "Um Daten dauerhaft zu speichern",
    answer_2: "Um Code abhängig von Bedingungen auszuführen",
    answer_3: "Um Styles zu laden",
    answer_4: "Um HTML zu generieren",
    right_answer: 2,
  },
  {
    question: "Was kann JavaScript direkt im Browser tun?",
    answer_1: "Betriebssystem-Dateien löschen",
    answer_2: "Datenbanken auf dem Server ändern",
    answer_3: "Benutzerinteraktionen verarbeiten",
    answer_4: "Hardware-Treiber installieren",
    right_answer: 3,
  },
];

let rightQuestions = 0;
let currentQuestion = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    showEndScreen();
  } else {
    updateProgressBar();
    updateToNextQuestion();
  }

  function gameIsOver() {
    return currentQuestion >= questions.length;
  }

  function showEndScreen() {
    document.getElementById("endScreen").style = "";
    document.getElementById("questionBody").style = "display: none";
    document.getElementById("amount-of-questions").innerHTML = questions.length;
    document.getElementById("amount-of-right-questions").innerHTML =
      rightQuestions;
    document.getElementById("header-image").src = "./assets/Quizapp/tropy.png";
  }

  function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById("progress-bar").innerHTML = `${percent}%`;
    document.getElementById("progress-bar").style = `width: ${percent}%`;
  }

  function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById("question-number").innerHTML = currentQuestion + 1;
    document.getElementById("questionText").innerHTML = question["question"];
    document.getElementById("answerText_1").innerHTML = question["answer_1"];
    document.getElementById("answerText_2").innerHTML = question["answer_2"];
    document.getElementById("answerText_3").innerHTML = question["answer_3"];
    document.getElementById("answerText_4").innerHTML = question["answer_4"];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answerText_${question["right_answer"]}`;

  if (rightAnswerSelected(selectedQuestionNumber)) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function rightAnswerSelected(selectedQuestionNumber) {
  return selectedQuestionNumber == questions["right_answer"];
}

function resetAnswerButtons() {
  document
    .getElementById("answerText_1")
    .parentNode.classList.remove("bg-danger");
  document
    .getElementById("answerText_1")
    .parentNode.classList.remove("bg-success");
  document
    .getElementById("answerText_2")
    .parentNode.classList.remove("bg-danger");
  document
    .getElementById("answerText_2")
    .parentNode.classList.remove("bg-success");
  document
    .getElementById("answerText_3")
    .parentNode.classList.remove("bg-danger");
  document
    .getElementById("answerText_3")
    .parentNode.classList.remove("bg-success");
  document
    .getElementById("answerText_4")
    .parentNode.classList.remove("bg-danger");
  document
    .getElementById("answerText_4")
    .parentNode.classList.remove("bg-success");
}

function restartGame() {
  document.getElementById("header-image").src = "./assets/Quizapp/brainbg.jpg";
  document.getElementById("endScreen").style = "display: none";
  document.getElementById("questionBody").style = "";

  rightQuestions = 0;
  currentQuestion = 0;

  init();
}
