#! /usr/bin/env node
import inquirer from "inquirer";
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count++;
}
const myString = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Enter the sentence: "
});
console.log(`The total number of vowels in "${myString.sentence}" is: ${countVowels(myString.sentence)}.`);
