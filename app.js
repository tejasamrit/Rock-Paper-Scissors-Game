let userScore =0;
let compScore =0;

const uscore= document.querySelector("#user-score");
const cscore= document.querySelector("#comp-score");

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll('.choice');

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        // console.log("clicked", userChoice);
        playGame(userChoice);
    });
});

const drawGame = () =>{
    msg.innerHTML="Tied";
    msg.style.backgroundColor = "aliceblue";
    console.log("Tied");
}

const showWinner = (userwin, userChoice, compChoice) =>{
    if(userwin){
        userScore++;
        uscore.innerHTML = userScore;
        msg.innerHTML = `  You Win! <br> ${userChoice} beats ${compChoice}` ; 
        msg.style.backgroundColor = "green";  
    }
    else{
        compScore++;
        cscore.innerHTML = compScore;
        msg.innerHTML =`  You Lose! <br> ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red";

    }
}

const playGame =(userChoice)=>{
    console.log("your choice : ", userChoice);
    const compChoice = getcompChoice();
    console.log("comp choice : ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userwin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userwin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            //scissors, rock
            userwin = compChoice === "scissors" ? false : true;
        }
        else{
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin,userChoice, compChoice );
    }
};

const getcompChoice =()=>{
    const options = ['rock', 'paper','scissors'];
    const randIndex = Math.floor(Math.random()*3);
    return options[randIndex];
}