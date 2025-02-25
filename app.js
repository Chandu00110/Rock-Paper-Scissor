let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");
let userWins = true;

const playGame = (userChoice) => {

    const computerChoice = compChoice();

    if(userChoice === computerChoice){
        msg.innerText = "It's a tie!";
        msg.style.backgroundColor = "grey";
    }
    else{
        if(userChoice === "rock"){
          userWins = computerChoice === "scissors" ? true : false;
        }
        else if(userChoice === "paper"){
            userWins = computerChoice === "rock" ? true : false;
        }
        else{
            userWins = computerChoice === "paper" ? true : false;
        }

        if(userWins){
            msg.innerText = "You win!";
            msg.style.backgroundColor = "green";
            userScore++;
        }else{
            msg.innerText = "Computer wins!";
            msg.style.backgroundColor = "red";
            compScore++;
        }
    }
    document.querySelector("#user-score").innerText = userScore;
    document.querySelector("#comp-score").innerText = compScore;
};

const compChoice = () =>{
    let gamechoices = ["rock", "paper", "scissors"];
    let compChoice = Math.floor(Math.random() * 3);
    return gamechoices[compChoice];
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    })
});
