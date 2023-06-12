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
    }else {
        alert(`Error: Unknown ${gameType}`);
        throw `Error: Unknown ${gameType}, aborting`;
    }

}

function checkAnswer() {

    // Compare user/s written answer against correct answer
    // If statement returns result

    let userAnswer = document.getElementById("answer-box").value;
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

    // Attains integer 1 and 2 and mathematical operator from DOM
    // Throws error code for unrecognised "operator"

    let questionContent = document.getElementById("question").textContent;

    if (questionContent === "Which war was also known as the Great War?") {
        return ["World War 1", "World war 1", "world war 1", "WW1","Ww1", "ww1"];
    } else if (questionContent === "Who discovered the Americas in 1492?") {
        return ["Christopher Columbus", "Christopher columbus", "christopher columbus", "Columbus", "columbus"];
    } else if (questionContent === "What year was the great fire of London?") {
        return ["1666"];
    } else if (questionContent === "Who was the leader of Soviet Russia during WWII?") {
        return ["Joseph Stalin", "Joseph stalin", "joseph stalin", "Stalin", "stalin"];
    } else if (questionContent === "True or False: Pompeii was destroyed by an eruption of Mount Etna?") {
        return ["False", "false"];
    } else if (questionContent === "Apollo, Athena and Poseidon are part of which ancient mythology?") {
        return ["Greek Mythology", "Greek mythology", "greek mythology", "Greek", "greek"];
    } else if (questionContent === "Who was President when the 9/11 attacks took place?") {
        return ["George Bush", "George W. Bush", "George bush", "george bush", "Bush", "bush"];
    } else if (questionContent === "Who was the first president of the USA?") {
        return ["George Washington", "George washington", "george washington", "Washington", "washington"];
    } else if (questionContent === "Alfred the Great was the ruler of which Anglo Saxon kingdom?") {
        return ["Wessex", "wessex"];
    } else if (questionContent === "Which nurse became famous for their work during the conflict of the Crimean war?") {
        return ["Florence Nightingale", "Florence nightingale", "florence nightingale"];
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

    document.getElementById("question").innerHTML = "True or False: Pompeii was destroyed by an eruption of Mount Etna?";

}

function Q6() {

    document.getElementById("question").innerHTML = "Apollo, Athena and Poseidon are part of which ancient mythology?";

}

function Q7() {

    document.getElementById("question").innerHTML = "Who was President when the 9/11 attacks took place?";

}

function Q8() {

    document.getElementById("question").innerHTML = "Who was the first president of the USA?";

}

function Q9() {

    document.getElementById("question").innerHTML = "Alfred the Great was the ruler of which Anglo Saxon kingdom?";

}

function Q10() {

    document.getElementById("question").innerHTML = "Which nurse became famous for their work during the conflict of the Crimean war?";

}