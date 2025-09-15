let userScore = 0;

let computerScore = 0;

const choices = document.querySelectorAll('.choice');

const msg = document.getElementById('msg');

const userScorePara = document.getElementById('user-score');

const computerScorePara = document.getElementById('comp-score');

const getComputerChoice = () => {
     const options = ['rock', 'paper', 'scissors'];
     const randomIdx = Math.floor(Math.random() * 3);
     return options[randomIdx];
}

const gameDraw = () => {
     msg.innerText = "It's a draw! Play again.";
     msg.style.backgroundColor = '#081b31';
}

const showWinner = (userWin, computerChoice, userChoice) => {
     if (userWin) {
          userScore++;
          userScorePara.innerText = userScore;
          msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
          msg.style.backgroundColor = 'green';
        } else {
          computerScore++;
          computerScorePara.innerText = computerScore;
          console.log('You lose!');
          msg.innerText = `You lose! ${computerChoice} beats your ${userChoice}`;
          msg.style.backgroundColor = 'red';
        }
     } 
const playGame = (userChoice) => {
     // Generate computer choice
     const computerChoice = getComputerChoice();

     if (userChoice === computerChoice) {
          gameDraw();
     } else {
          let userWin = true;
          if (userChoice === 'rock') {
               // sccissors,paper
               userWin = computerChoice == 'paper' ? false : true;
     } else if (userChoice === 'paper') {
          // scissors,rock
          userWin = computerChoice == 'scissors' ? false : true;
} else {
     // rock,paper
     userWin = computerChoice == 'rock' ? false : true;
}
     showWinner(userWin, computerChoice, userChoice);
     }
};
choices.forEach((choice) => {
     choice.addEventListener('click', () => {
          const userChoice = choice.id;
          playGame(userChoice);
     });
});