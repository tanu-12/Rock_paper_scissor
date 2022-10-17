let ccounter=0;
let ucounter=0;
const choices=["rock","paper","scissor"];


function getComputerChoice(choice)  
    {return Math.floor(Math.random()*choice.length);

}


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
{   setInterval(function(){
      let userChoice=prompt("enter your choice ").toLowerCase();
    let computerChoice=choices[getComputerChoice(choices)];
    console.log(computerChoice);
    console.log(userChoice);
    const result=playRound(userChoice,computerChoice);
    console.log(result);
    console.log(ccounter);
    console.log(ucounter);

},5000);
}

for (let i=1;i<=5;i++)
{ let play=prompt("Do you want to play?").toLowerCase();
if(play==="yes")
game();
else if(play==="no")
break;
}
