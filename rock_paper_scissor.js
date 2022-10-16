let ccounter=0;
let ucounter=0;
const choices=["rock","paper","scissor"];
let userChoice;
let computerChoice;
function getChoices(){
computerChoice=choices[getComputerChoice(choices)];
userChoice=prompt("enter your choice ").toLowerCase();
}
function getComputerChoice(choice)  
    {return Math.floor(Math.random()*choice.length);

}
console.log(computerChoice);
console.log(userChoice);

 function playRound(playerSelection,computerSelection)
 {
    if(computerSelection=="rock"&&playerSelection=="scissor")
    {ccounter++;
    return (`You lose !! ${computerSelection} beats ${playerSelection}`);
    
}
    else if(computerSelection=="scissor"&&playerSelection=="paper")
    {ccounter++;
    return (`You lose !! ${computerSelection} beats ${playerSelection}`);
    
    }
   else if(computerSelection=="paper"&&playerSelection=="rock")
   {ccounter++;
    return (`You lose !! ${computerSelection} beats ${playerSelection}`);
    
   }
    else if(computerSelection===playerSelection)
    return (`Its a tie`);
    else 
    {ucounter++;
    return (`You win !! ${playerSelection} beats ${computerSelection}`);

    }

}

function game()
{   getChoices();
    const result=playRound(userChoice,computerChoice);
    console.log(result);
    console.log(ccounter);
console.log(ucounter);

}

for (let i=1;i<=5;i++)
game();
