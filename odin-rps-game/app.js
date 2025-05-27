const yourScore = document.getElementById("yourScore")
const computerScore = document.getElementById("computersScore")
const yourChoise = document.getElementById("yourChoise")
const computersChoise = document.getElementById("computersChoise")
let choise;
let computerChoise;
let score = 0;
let scorePc = 0;
function setRock() {
    choise = 1
    getComputerChoise()
    PlayGame()
}
function setPaper() {
    choise = 2
    getComputerChoise()
    PlayGame()
}
function setScissors() {
    choise = 3
    getComputerChoise()
    PlayGame()
}
function getComputerChoise() {
    computerChoise = Math.ceil(Math.random() * 3)
}
function PlayGame() {
    let match = { 1: "Rock", 2: "Paper", 3: "Scissors" }
    yourChoise.textContent = "Your Choise: " + match[choise]
    computersChoise.textContent = "Computers Choise: " + match[computerChoise]
    if (
        (choise === 1 && computerChoise === 3) ||
        (choise === 2 && computerChoise === 1) ||
        (choise === 3 && computerChoise === 2)) {
        score++;
    }
    else if (choise === computerChoise) {
        yourScore.textContent = "Tie!";
        computerScore.textContent = "";
        return;
    } else {
        scorePc++;
    }
    yourScore.textContent = "Your Score: " + score
    computerScore.textContent = "Computers Score: " + scorePc
}
function resetScore() {
    score = 0
    scorePc = 0
    yourScore.textContent = "Your Score: " + score
    computerScore.textContent = "Computers Score: " + scorePc
    yourChoise.textContent = "Your Choise: "
    computersChoise.textContent = "Computers Choise: "
}