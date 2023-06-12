// History category
// Event listener, waits for DOM content
// QList - compiles all question functions

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    let QList = [Q1(), Q2(), Q3(), Q4(), Q5(), Q6(), Q7(), Q8()];

    for (let button of buttons) {
        button.addEventListener("click", function () {
            checkAnswer();
            QList[Math.floor(Math.random() * QList.length)];
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
            QList[Math.floor(Math.random() * QList.length)];
        }
    });

    Q3();

});

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

// History question content

function Q1() {

    document.getElementById("question").innerHTML = "Which war was also known as the Great War?";

}

function Q2() {

    document.getElementById("question").innerHTML = "Who discovered the Americas in 1492?";

}

function Q3() {

    document.getElementById("question").innerHTML = "What year was the great fire of London?";

}

function Q4() {

    document.getElementById("question").innerHTML = "Who was the leader of Soviet Russia during WWII?";

}

function Q5() {

    document.getElementById("question").innerHTML = "Was Pompeii was destroyed by an eruption of Mount Etna?";

}

function Q6() {

    document.getElementById("question").innerHTML = "Apollo, Athena and Poseidon are part of which type of mythology?";

}

function Q7() {

    document.getElementById("question").innerHTML = "Who was President when the 9/11 attacks took place?";

}

function Q8() {

    document.getElementById("question").innerHTML = "Who was the first president of the USA?";

}

function calculateCorrectAnswer() {

    // Currently only first value is returned

    let questionContent = document.getElementById("question").innerHTML;

    if (questionContent = "Which war was also known as the Great War ?") {
        return "World War 1";
    } else if (questionContent = "Who discovered the Americas in 1492?") {
        return "Christopher Columbus";
    } else if (questionContent = "What year was the great fire of London?") {
        return "1666";
    } else if (questionContent = "Who was the leader of Soviet Russia during WWII?") {
        return "Joseph Stalin";
    } else if (questionContent = "True Or False: Pompeii was destroyed by an eruption of Mount Etna") {
        return "False";
    } else if (questionContent = "Who was the first man on the moon?") {
        return "Neil Armstrong";
    } else if (questionContent = "Who was President when the 9/11 attacks took place?") {
        return "George Bush";
    } else if (questionContent = "Who was the first president of the USA?") {
        return "George Washington";
    } else {
        alert(`Unimplemented operator ${questionContent}`);
        throw `Unimplemented operator ${questionContent}, aborting!`;
    }
}

// Compare answers

function checkAnswer() {

    // Compare user/s written answer against correct answer
    // If statement returns result

    let userAnswer = document.getElementById("answer-box").value;
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer == calculatedAnswer;

    if (isCorrect) {
        alert("Correct!");
        incrementScore();
    } else {
        alert(`${userAnswer} is incorrect! The answer is ${calculatedAnswer}.`);
        incrementWrongAnswer();
        console.log(calculatedAnswer);
    }

}
