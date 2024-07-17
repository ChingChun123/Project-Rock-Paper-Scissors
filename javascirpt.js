/*  - write a "rock paper scissors" game
    - create a function for generating "rock", "paper" and "scissors" 
    using Math.random
    - create a variable for human's input for "rock", "paper" and 
    "scissors"
    - create a function called "playRound" with two parameters of human's 
    input and computer's decision. The function will be return 
    "You win", "It's a tie" or "You lose". It will also record the
    score on both sides.
    - create a function to run the function playRound() five times
*/

let humanScore = parseInt(0);
let computerScore = parseInt(0);

function computerChoice(){
    if (Math.random() < 0.33){
        return "rock"
    } else if (0.33 < Math.random() < 0.66){
        return "paper"
    } else {
        return "scissors"
    }
}

function humanChoice(){
    let abc = prompt("Pick a move!");
    let lowercase = abc.toLowerCase();
    if (lowercase == "rock" || lowercase == "paper" || lowercase == "scissors"){
        return lowercase;
    } else {alert("please enter either 'rock', 'paper' or 'scissors'")
    }

}


function playRound(humanInput, computerInput){

    
    if (humanInput === computerInput){
        return "It's a tie!"
    } else if (humanInput === "paper" && computerInput === "rock"){
        humanScore++;
        return "You win!";
        
    } else if (humanInput === "rock" && computerInput === "scissors"){
        humanScore++;
        return "You win!";
        
    } else if (humanInput === "scissors" && computerInput === "paper"){
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
        
    }

}

let n = 1;
function play(){
    console.log(playRound(humanChoice(), computerChoice()));
    console.log(`${humanScore} : ${computerScore}`);
    n++;
    if (n <= 5){
        play();
        
    } else {
        return "end game!"
    }
}

play()

