// History category
// Event listener, waits for DOM content
// QList - compiles all question functions

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            checkAnswer();
            
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

    randomQ();

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

function randomQ() {
    let Q1 = document.getElementById("question").innerHTML = "Which war was also known as the Great War?";
    let Q2 = document.getElementById("question").innerHTML = "Who discovered the Americas in 1492?";
    let Q3 = document.getElementById("question").innerHTML = "What year was the great fire of London?";
    let Q4 = document.getElementById("question").innerHTML = "Who was the leader of Soviet Russia during WWII?";
    let Q5 = document.getElementById("question").innerHTML = "Was Pompeii was destroyed by an eruption of Mount Etna?";
    let Q6 = document.getElementById("question").innerHTML = "Apollo, Athena and Poseidon are part of which type of mythology?";
    let Q7 = document.getElementById("question").innerHTML = "Who was President when the 9/11 attacks took place?";
    let Q8 = document.getElementById("question").innerHTML = "Who was the first president of the USA?";

    let QList = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8];
    QList[Math.floor(Math.random() * Qlist.length)];
    console.log(QList[Math.floor(Math.random() * Qlist.length)]);
}

function calculateCorrectAnswer() {

    // Currently only first value is returned

    let questionContent = document.getElementById("question").innerHTML;
    let answer1 = "World War 1"
    let answer2 = "Christopher Columbus"
    let answer3 = "1666"
    let answer4 = "Joseph Stalin"
    let answer5 = "False"
    let answer6 = "Neil Armstrong"
    let answer7 = "George Bush"
    let answer8 = "George Washington"

    if (questionContent = "Which war was also known as the Great War ?") {
        return answer1;
    } else if (questionContent = "Who discovered the Americas in 1492?") {
        return answer2;
    } else if (questionContent = "What year was the great fire of London?") {
        return answer3;
    } else if (questionContent = "Who was the leader of Soviet Russia during WWII?") {
        return answer4;
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
