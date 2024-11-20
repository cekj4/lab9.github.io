//Take the previously created Rock Paper Scissors application and allow the user to play 3 times.
//Bonus: The game should stop if the user wins -
//Bonus: The computer should change their guess each time

let userOption =null;
let attempts = 0;
let computerPreviouseChoice = null;
function gameOption(option){
    userOption=option;
    const options=["Rock", "Paper","Scissors"];
    document.getElementById("placeholder").innerText ="You selected " + options[userOption-1];
}
function game(){
    if (attempts>=3){
        document.getElementById("placeholder").innerText = "Refresh the website to play again";
        return;
        document.getElementById("submitButton").style.display = "none";

    }
    if(userOption===null){
        document.getElementById("placeholder").innerText ="Please select rock, paper or scissors!";
        return;
    }
    let computerOption; //bonus - line 3 - different option for the computer
        do{
            computerOption = Math.floor(Math.random()* 3 ) + 1;
        } 
        while (computerOption === computerPreviouseChoice);
    computerPreviouseChoice=computerOption; // 

    const options=["Rock", "Paper", "Scissors"];
    const userChoice = options[userOption - 1];
    const computerChoice=options[computerOption -1];
    
    
    let message;
    if(userChoice===computerChoice){
        message= `It's a draw! Played ${attempts + 1}/3.`;
    } else if(
        (userChoice==="Rock" && computerChoice === "Scissors") || 
        (userChoice==="Paper" && computerChoice === "Rock") ||
        (userChoice==="Scissors" && computerChoice === "Paper")
    ) {
        document.getElementById("placeholder").innerText = "You won! Computer chose " + computerChoice + ". Please refresh the website to play again";
        message="To play again - please refresh the website";
        document.getElementById("submitButton").style.display = "none"; //line 2 - user wins, button disappears, game's over. 
        return;
    } else {
        message= ` You lost! Played ${attempts +1 }/3.`;
    }
    //rounds
    attempts ++; //added cause attempts are declared =0; in let, line 6
    if (attempts >=3) { 
        document.getElementById("placeholder").innerText= message + " Computer chose " + computerChoice;
        message += " It's over. Refresh the website to play again. ";
        document.getElementById("submitButton").style.display = "none";
    }
    document.getElementById("placeholder").innerText= message + " Computer chose " + computerChoice;
    userOption=null;
}


function songBonus(){
    let lyrics = "";
    for(let i=99;i>=0;i=i-1){
        if(i>1){
            lyrics+= i + " bottle of beer on the wall, " + i + " bottles of beer<br>";
            lyrics+= "Take one down and pass it around, " + (i-1) + " more bottles of beer on the wall<br><br>";
        } else if(i===1){
            lyrics+= i + " bottle of beer on the wall, " + i + " bottle of beer<br>"; 
            lyrics+= "Take one down and pass it around, no more bottles of beer on the wall<br><br>"; 
        } else{
            lyrics+="No more bottles of beer on the wall, no more bottles of beer<br>"; 
            lyrics+="Take one down and pass it around, 99 bottles of beer on the wall<br><br>";
        }
    }   
    document.getElementById("lyrics").innerHTML= lyrics;
}