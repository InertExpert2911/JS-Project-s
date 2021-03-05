//USER INPUT FUNCTION
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }
  else{
    console.log('Error!')
  }
};


//COMPUTER INPUT FUNCTION
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0 :
     return 'rock';
    case 1 :
     return 'paper';
    case 2 :
     return 'scissors';
  }
};


 //DETERMINE THE WINNER
const determineWinner = (userChoice, computerChoice) =>
{
  if(userChoice === computerChoice){
    return 'Its a TIE';
  }

  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer Wins With a Paper Over a Rock.';
    }
    else{
      return 'You Win !'
    }
  }

  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Computer Wins With a Scissors Over a Paper.';
    }
    else{
      return 'You Win !';
    }
  }

 if(userChoice === 'scissors'){
   if(computerChoice === 'rock'){
     return 'Computer Wins With a Rock Over a Scissors.';
   }
   else{
     return 'You Win !';
   }
 }

 if(userChoice === 'bomb'){
   return 'A CHEAT AND U WIN ALWAYS XD.'
 }
};

 // PLAY GAME FUNCTION
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice(); 
  console.log(`User's Choice: ${userChoice}.`);
  console.log(`Computer's Choice: ${computerChoice}.`)
  const winner = determineWinner(userChoice, computerChoice);
  console.log(winner);
}

playGame();
