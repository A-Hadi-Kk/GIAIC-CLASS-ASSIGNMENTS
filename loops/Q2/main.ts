const maxValue: number = 100;
const randomNumber: number = Math.floor(Math.random() * maxValue) + 1;
console.log(`Random Number (for development purposes): ${randomNumber}`);

let isGuessCorrect: boolean = false;

const guesses: number[] = [45, 67, 89, 23, randomNumber]; 

let index: number = 0;

while (index < guesses.length && !isGuessCorrect) {
    const currentGuess: number = guesses[index];

    if (currentGuess === randomNumber) {
        console.log(`Congratulations! You guessed the correct number: ${currentGuess}`);
        isGuessCorrect = true;
    } else if (currentGuess < randomNumber) {
        console.log(`Guess ${currentGuess} is too low.`);
    } else {
        console.log(`Guess ${currentGuess} is too high.`);
    }

    index++;
}

if (!isGuessCorrect) {
    console.log(`Sorry, none of your guesses were correct. The correct number was ${randomNumber}.`);
}
