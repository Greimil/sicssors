let computerSelection 
let playerSelection 
let contador = 0
let victoPlayer = 0
let victocomputador = 0
let respuesta



const resultadoFinal = document.getElementById("ResultadoFinal")
const rounds = document.getElementById("Rounds")
const contadorRounds = document.getElementById("contadorRounds")
const subpantalla = document.querySelector(".subpantalla")
const scorePlayer = document.getElementById("score-player")
const scoreComputer = document.getElementById("score-computer")
const spanScreen = document.querySelector(".span-screen")



window.addEventListener("click",(e) =>{
    
    if(contador < 5 && (e.target.id == "rock" || e.target.id == "paper" || e.target.id == "scissor" ) ){
    
        playerSelection = e.target.id 
        computerSelection = computerPlay()
        respuesta = playRound(computerSelection,playerSelection)
        subpantalla.textContent = respuesta
        contador++
        contadorRounds.textContent = contador
        
        createAnimation(e.target.src, computerSelection)
        
        if(respuesta.includes("win")){
            victoPlayer++
        } else if(respuesta.includes("lose")){
            victocomputador++
        }
        
        scorePlayer.textContent = victoPlayer
        scoreComputer.textContent = victocomputador

        
    }
    else{
        if(victoPlayer > victocomputador && contador == 5){
            resultadoFinal.textContent = "You Win, you already played 5 rounds press F5 to play again"
        } else if(victoPlayer < victocomputador && contador == 5 ){
            resultadoFinal.textContent = "You lose :( you already played 5 rounds press F5 to play again"
        } else if (victoPlayer == victocomputador && victoPlayer > 0 && victocomputador > 0 ) {
            resultadoFinal.textContent = "It's a tie :) press F5 to play again "
        } else {
            return
        }
        
    }


})


function createAnimation (playerSelection, computerSelection) {
    
    let srcComputer 

    if (computerSelection == "rock") {
        srcComputer = "piedra.png"
    } else if (computerSelection == "scissor") {
        srcComputer = "tijera.png"
    } else {
        srcComputer = "papel.png"
    }

    spanScreen.innerHTML = `<img src="${playerSelection}" /> <h3>VS</h3>   <img src="${srcComputer}" />   `

}



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


function playRound(computerSelection, playerSelection){
    if(playerSelection == "paper" && computerSelection == "rock"){
        return "you win, paper beats rock"
    } else if(playerSelection == "paper" && computerSelection == "scissor"){
        return "You lose, scissor beats paper"
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
