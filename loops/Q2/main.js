var maxValue = 100;
var randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log("Random Number (for development purposes): ".concat(randomNumber));
var isGuessCorrect = false;
var guesses = [45, 67, 89, 23, randomNumber];
var index = 0;
while (index < guesses.length && !isGuessCorrect) {
    var currentGuess = guesses[index];
    if (currentGuess === randomNumber) {
        console.log("Congratulations! You guessed the correct number: ".concat(currentGuess));
        isGuessCorrect = true;
    }
    else if (currentGuess < randomNumber) {
        console.log("Guess ".concat(currentGuess, " is too low."));
    }
    else {
        console.log("Guess ".concat(currentGuess, " is too high."));
    }
    index++;
}
if (!isGuessCorrect) {
    console.log("Sorry, none of your guesses were correct. The correct number was ".concat(randomNumber, "."));
}
