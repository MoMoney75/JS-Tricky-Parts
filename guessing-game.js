function guessingGame() {
let randNum = Math.floor(Math.random()*100)
let isOver = false;


return function guessNum(guess){
if(isOver) return "The game is over, you already won!"
if(guess === randNum){
    isOver = true;
    return "You guessed correctly!"
}

if(guess < randNum) return ` ${guess}is too low!`
if(guess > randNum) return  `${guess} is too high!`
}
}

module.exports = { guessingGame };
