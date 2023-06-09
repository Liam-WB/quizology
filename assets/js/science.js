// Science category
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

    // Displays the question based on the answer-box element's HTML content

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

    if (questionContent === "Which is the main gas that makes up the Earth's atmosphere?") {
        return ["nitrogen"];
    } else if (questionContent === "What does DNA stand for?") {
        return ["deoxyribonucleic acid"];
    } else if (questionContent === "The concept of gravity was discovered by which famous physicist?") {
        return ["sir isaac newton", "isaac newton", "newton"];
    } else if (questionContent === "How many bones are in the human body?") {
        return ["206"];
    } else if (questionContent === "What is the perimeter of a circle called?") {
        return ["circumference"];
    } else if (questionContent === "Sound travels faster in air than in water: true or false?") {
        return ["false"];
    } else if (questionContent === "What was the name of the first artificial satellite to enter space?") {
        return ["sputnik", "sputnik.1", "sputnik 1", "sputnik one"];
    } else if (questionContent === "What metal is the best conductor of electricity?") {
        return ["silver"];
    } else if (questionContent === "What does a Geiger Counter measure?") {
        return ["radiation"];
    } else if (questionContent === "How many bones do sharks have?") {
        return ["zero", "0", "none"];
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

// Science question content

function Q1() {

    document.getElementById("question").innerHTML = "Which is the main gas that makes up the Earth's atmosphere?";

}

function Q2() {

    document.getElementById("question").innerHTML = "What does DNA stand for?";

}

function Q3() {

    document.getElementById("question").innerHTML = "The concept of gravity was discovered by which famous physicist?";

}

function Q4() {

    document.getElementById("question").innerHTML = "How many bones are in the human body?";

}

function Q5() {

    document.getElementById("question").innerHTML = "What is the perimeter of a circle called?";

}

function Q6() {

    document.getElementById("question").innerHTML = "Sound travels faster in air than in water: true or false?";

}

function Q7() {

    document.getElementById("question").innerHTML = "What was the name of the first artificial satellite to enter space?";

}

function Q8() {

    document.getElementById("question").innerHTML = "What metal is the best conductor of electricity?";

}

function Q9() {

    document.getElementById("question").innerHTML = "What does a Geiger Counter measure?";

}

function Q10() {

    document.getElementById("question").innerHTML = "How many bones do sharks have?";

}