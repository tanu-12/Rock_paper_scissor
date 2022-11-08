let ccounter = 0;
let ucounter = 0;
const choices = ["rock", "paper", "scissor"];


function getComputerChoice(choice) {
    return Math.floor(Math.random() * choice.length);

}


function playRound(playerSelection, computerSelection) {

    if (computerSelection == "rock" && playerSelection == "scissor") {
        ccounter++;
        div.textContent = `You lose !! ${computerSelection} beats ${playerSelection} `;
        score.textContent = `You:${ucounter} Computer:${ccounter}`

    }
    else if (computerSelection == "scissor" && playerSelection == "paper") {
        ccounter++;
        div.textContent = `You lose !! ${computerSelection} beats ${playerSelection} `;
        score.textContent = `You:${ucounter} Computer:${ccounter}`

    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        ccounter++;
        div.textContent = `You lose !! ${computerSelection} beats ${playerSelection} `;
        score.textContent = `You:${ucounter} Computer:${ccounter}`

    }
    else if (computerSelection === playerSelection) {
        div.textContent = `Its a tie `;
        score.textContent = `You:${ucounter} Computer:${ccounter}`
    }
    else {
        ucounter++;
        div.textContent = `You win !! ${playerSelection} beats ${computerSelection} `;
        score.textContent = `You:${ucounter} Computer:${ccounter}`

    }
    if (ccounter === 5 || ucounter === 5) {
        let finalResult = document.createElement('div');
        if (ccounter > ucounter)
            finalResult.textContent = `Computer win`;
        else
            finalResult.textContent = `You win`;
        ccounter = 0;
        ucounter = 0;
        score.appendChild(finalResult);

    }


}
//older version of rps used this function
/*function game() {
    //for (let i = 1; i <= 5; i++) {
    let userChoice = prompt("enter your choice ").toLowerCase();
    let computerChoice = choices[getComputerChoice(choices)];
    console.log(computerChoice);
    console.log(userChoice);
    const result = playRound(userChoice, computerChoice);
    console.log(result);
    console.log(ccounter);
    console.log(ucounter);



}*/
let buttons = document.querySelectorAll('.option');

for (let i = 0; i < buttons.length; i++)

    buttons[i].addEventListener('click', function (e) {
        playRound(e.target.value, choices[getComputerChoice(choices)])
    });
let div = document.querySelector('.result');
let score = document.querySelector('.score');

