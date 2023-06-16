// Geography category
// Event listener, waits for DOM content

// questionList variable - for generating random maths question operators (only non-function varible)

let questionList = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10"];

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
                runGame(questionList[Math.floor(Math.random() * questionList.length)]);
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
            runGame(questionList[Math.floor(Math.random() * questionList.length)]);
        }
    });

    runGame(questionList[Math.floor(Math.random() * questionList.length)]);
});

function runGame(gameType) {

    // Displays the question based on the question element's HTML content

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    if (gameType === "Q1") {
        Q1();
    } else if (gameType === "Q2") {
        Q2();
    } else if (gameType === "Q3") {
        Q3();
    } else if (gameType === "Q4") {
        Q4();
    } else if (gameType === "Q5") {
        Q5();
    } else if (gameType === "Q6") {
        Q6();
    } else if (gameType === "Q7") {
        Q7();
    } else if (gameType === "Q8") {
        Q8();
    } else if (gameType === "Q9") {
        Q8();
    } else if (gameType === "Q10") {
        Q8();
    } else {
        alert(`Error: Unknown ${gameType}`);
        throw `Error: Unknown ${gameType}, aborting`;
    }

}

function checkAnswer() {

    // Compare user/s written answer against correct answer
    // If statement returns result

    let userAnswer = document.getElementById("answer-box").value.toLowerCase();
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = calculatedAnswer.includes(userAnswer);

    if (isCorrect) {
        alert("Correct!");
        incrementScore();
    } else {
        alert(`${userAnswer} is incorrect! The answer is ${calculatedAnswer[0]}.`);
        incrementWrongAnswer();
    }

    runGame(questionList[Math.floor(Math.random() * questionList.length)]);

}

function calculateCorrectAnswer() {

    // Pairs answers to each question based on question element's HTML content
    // Throws error code for unrecognised "questionContent"

    let questionContent = document.getElementById("question").textContent;

    if (questionContent === "The five major oceans are the Pacific, Arctic, Southern, Indian and:") {
        return ["atlantic", "atlantic ocean"];
    } else if (questionContent === "Which continent is the largest?") {
        return ["asia"];
    } else if (questionContent === "What do we call the line at 0 degrees latitude that splits the Earth into two halves?") {
        return ["the equator", "equator"];
    } else if (questionContent === "True or False: The seismometer is the piece of equipment used to measure earthquakes.") {
        return ["true"];
    } else if (questionContent === "What is the capital of Poland?") {
        return ["warsaw"];
    } else if (questionContent === "What is the capital of Italy?") {
        return ["rome"];
    } else if (questionContent === "How many states are there in the US?") {
        return ["50", "fifty"];
    } else if (questionContent === "Which is larger, Russia or China?") {
        return ["russia"];
    } else if (questionContent === "Which cluster of mountains border France and Spain?") {
        return ["pyrenees", "the pyrenees", "the pyrenees mountains", "pyrenees mountains"];
    } else if (questionContent === "What is the official currency of India?") {
        return ["rupee", "rupees", "indian Ruppee", "indian rupees", "the rupee"];
    } else {
        alert(`Error: Unknown questionType ${questionContent}`);
        throw `Error: Unknown questionType ${questionContent}, aborting!`;
    }
}

function incrementScore() {

    // Attains "right" score from DOM and adds "oldScore" tally

    let oldScore = parseInt(document.getElementById("right-score").innerText);
    document.getElementById("right-score").innerText = ++oldScore;

}

function incrementWrongAnswer() {

    // Attains "wrong" score from DOM and adds "oldScore" tally

    let oldScore = parseInt(document.getElementById("wrong-score").innerText);
    document.getElementById("wrong-score").innerText = ++oldScore;

}

// Geography question content

function Q1() {

    document.getElementById("question").innerHTML = "The five major oceans are the Pacific, Arctic, Southern, Indian and:";

}

function Q2() {

    document.getElementById("question").innerHTML = "Which continent is the largest?";

}

function Q3() {

    document.getElementById("question").innerHTML = "What do we call the line at 0 degrees latitude that splits the Earth into two halves?";

}

function Q4() {

    document.getElementById("question").innerHTML = "True or False: The seismometer is the piece of equipment used to measure earthquakes.";

}

function Q5() {

    document.getElementById("question").innerHTML = "What is the capital of Poland?";

}

function Q6() {

    document.getElementById("question").innerHTML = "What is the capital of Italy?";

}

function Q7() {

    document.getElementById("question").innerHTML = "How many states are there in the US?";

}

function Q8() {

    document.getElementById("question").innerHTML = "Which is larger, Russia or China?";

}

function Q9() {

    document.getElementById("question").innerHTML = "Which cluster of mountains border France and Spain?";

}

function Q10() {

    document.getElementById("question").innerHTML = "What is the official currency of India?";

}