#! /usr/bin/env node
import inquirer from "inquirer";
function firstNonRepeatedCharacter(str) {
    for (const char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}
const str = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Enter a word or a sentence: "
});
const firstNonRepeated = firstNonRepeatedCharacter(str.sentence);
if (firstNonRepeated !== null) {
    console.log(`First non-repeated character in "${str.sentence}" is: ${firstNonRepeated}.`);
}
else {
    console.log(`No non-repeated character found in "${str.sentence}".`);
}
