let footballQuestions = [
    {
        "question": "Wer ist mit 365 Toren der Rekordtorschütze in der Bundesliga?",
        "answer_1": "Robert Lewandowski",
        "answer_2": "Mario Götze",
        "answer_3": "Erling Haaland",
        "answer_4": "Gerd Müller",
        "right_answer": 4,
    },

    {
        "question": " Jürgen Klopp trainierte vor Borussia Dortmund noch eine zweite Mannschaft in Deutschland. Welche?",
        "answer_1": "1. FSV Mainz 05",
        "answer_2": "FC Schalke 04",
        "answer_3": "1. FC Kaiserslautern",
        "answer_4": "Herta BSC",
        "right_answer": 1,
    },

    {
        "question": "Welches Land gewann die meisten Weltmeisterschaften?",
        "answer_1": "Deutschland",
        "answer_2": "Spanien",
        "answer_3": "Argentinien",
        "answer_4": "Brasilien",
        "right_answer": 4,
    },

    {
        "question": "Welches Land stand dreimal im WM-Finale, konnte jedoch keines davon gewinnen?",
        "answer_1": "Ungarn",
        "answer_2": "Niederlande",
        "answer_3": "Italien",
        "answer_4": "Russland",
        "right_answer": 2,
    },

    {
        "question": "Welcher Klub hat die meisten Titel in der Champions League?",
        "answer_1": "PSG",
        "answer_2": "Bayer München",
        "answer_3": "Real Madrid",
        "answer_4": "AC Milan",
        "right_answer": 3,
    },

    {
        "question": "Die Champions League wurde einmal von einem Team aus Rumänien gewonnen. Welcher Klub ist gesucht?",
        "answer_1": "Sepsi OSK",
        "answer_2": "Dinamo Bukarest",
        "answer_3": "Rapid Bukarest",
        "answer_4": " Steaua Bukarest",
        "right_answer": 4,
    },

    {
        "question": "Wer ist Rekordtorschütze der Champions League?",
        "answer_1": "Cristiano Ronaldo",
        "answer_2": "Karim Benzema",
        "answer_3": "Lionel Messi",
        "answer_4": "Kylian Mbappe",
        "right_answer": 1,
    },

    {
        "question": "Welcher Feldspieler schaffte es in drei verschiedenen Jahrzehnten in ein Champions-League-Finale?",
        "answer_1": "Luis Figo",
        "answer_2": "Frank Lampard",
        "answer_3": "Ryan Giggs",
        "answer_4": "Lothar Matthäus",
        "right_answer": 3,
    },

    {
        "question": "Welches Team holte den ersten Titel in der Premier League?",
        "answer_1": "Manchester United",
        "answer_2": "Real Madrid",
        "answer_3": "Nottingam Forest",
        "answer_4": "Inter Milan",
        "right_answer": 1,
    },

    {
        "question": " In welchem Jahr wurde die EM von 16 auf 24 Mannschaften aufgestockt?",
        "answer_1": "EURO 2000",
        "answer_2": "EURO 2016",
        "answer_3": "EURO 2004",
        "answer_4": "EURO 2012",
        "right_answer": 2,
    },
];

let currentQuestion = 0;

function init() {
    document.getElementById('questionsNumber').innerHTML = footballQuestions.length;

    showQuestion();
}

function showQuestion() {
    let footballQuestion = footballQuestions[currentQuestion];

    document.getElementById('actualQuestion').innerHTML = currentQuestion + 1;
    document.getElementById('question').innerHTML = footballQuestion['question'];
    document.getElementById('answer_1').innerHTML = footballQuestion['answer_1'];
    document.getElementById('answer_2').innerHTML = footballQuestion['answer_2'];
    document.getElementById('answer_3').innerHTML = footballQuestion['answer_3'];
    document.getElementById('answer_4').innerHTML = footballQuestion['answer_4'];
}

function answer(selection) {
    let footballQuestion = footballQuestions[currentQuestion];
    let selectedQustionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${footballQuestion['right_answer']}`;

    if (selectedQustionNumber == footballQuestion['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}