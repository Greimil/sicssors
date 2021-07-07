window.addEventListener("click",(e) =>{
    playerSelection = e.target.id
    if(!playerSelection) return 
    console.log(game(computerSelection, playerSelection))
    console.log(computerSelection, "seleccion de la computadora")

})




function computerPlay(){
    let numRamdon = Math.round(Math.random() * 2 )
    if(numRamdon == 0){
        return "rock"
    } else if(numRamdon == 1){
        return "scissor"
    } else if (numRamdon == 2){
        return "paper"
    }
}

let computerSelection = computerPlay()
let playerSelection = "rock"



function playRound(computerSelection, playerSelection){
    if(playerSelection == "paper" && computerSelection == "rock"){
        return "you win, paper beats rock"
    } else if(playerSelection == "paper" && computerSelection == "scissor"){
        return `You lose, scissor beats paper `
    } else if(playerSelection == "paper" && computerSelection == "paper"){
        return "nobody Wins, both select paper"
    }


    else if(playerSelection == "scissor" && computerSelection == "paper"){
        return "You win, scissor beats paper"
    } else if(playerSelection == "scissor" && computerSelection == "rock"){
        return "You lose, rock beats scissor"
    } else if(playerSelection == "scissor" && computerSelection == "scissor"){
        return "nobody Wins, both select scissor"
    }


    else if(playerSelection == "rock" && computerSelection == "paper"){
        return "You lose, paper beats rock"
    } else if(playerSelection == "rock" && computerSelection == "scissor"){
        return "You win, rock beats scissor"
    } else if(playerSelection == "rock" && computerSelection == "rock"){
        return "nobody Wins, both select rock"
    }
}

function game(){
   let resultado 
    for (let i = 0; i < 5; i++) {
     resultado =  playRound(computerSelection,playerSelection)
        return resultado
    }
   
}