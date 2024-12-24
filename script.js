let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const draw = () =>{
    console.log(`Game was draw`);
    msg.innerText = "Game draw ! "
    msg.style.backgroundColor = "black"


    
}

const showwinner = (userwin,userchoice,compChoice) =>{
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText = `You win ! your ${userchoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
        
    }else{
        compScore++;
        compScorePara.innerText = compScore
        msg.innerText = `You lose ! ${compChoice} beats your ${userchoice}`
        msg.style.backgroundColor = "red"        
    }
}

const playgame = (userchoice) =>{
    console.log(`User Choice = `,userchoice);
    const compChoice = genCompChoice();
    console.log(`Computer Choice = `,compChoice);

    if(userchoice===compChoice){
        draw();
    } else{
        let userwin = true;
        if(userchoice==="rock"){
            // comp choice = paper , scissor
            userwin = compChoice === "paper" ? false : true;
        }else if(userchoice==="paper"){
            // comp choice = rock , scissor
            userwin = compChoice === "scissors" ? false : true;
        }else if(userchoice==="scissors"){
            // comp choice = rock , paper
            userwin = compChoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compChoice);
    }
    
    
}

choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id")
        playgame(userchoice)
    })
})