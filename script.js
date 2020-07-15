let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

/*Called at the start of each new round
to generate new target number */
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (guess, targetNum) => {
    if (guess === targetNum) return 0;
    if (guess < targetNum) {
        return (targetNum - guess);
    } else return (guess - targetNum);
}

const compareGuesses = (userGuess, cpuGuess, targetNum) => {
    //userguess
    let ugDifference = getAbsoluteDistance(userGuess, targetNum);
    
    //cpuGuess
    let cpuDifference = getAbsoluteDistance(cpuGuess, targetNum);

    //compare and return result
    if (userGuess < 0 || userGuess > 9) {
        alert('Number is out of range');
    } else if (ugDifference === cpuDifference || ugDifference < cpuDifference ) {
        return true;
     } else return false;
}

const updateScore = winner => (winner === 'human') ? humanScore += 1 : computerScore += 1;

const advanceRound = () => currentRoundNumber += 1;