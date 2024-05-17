#! /usr/bin/env node
import inquirer from "inquirer";
function square(number: number){
    return number * number;
}
const num = await inquirer.prompt({
    name: "input",
    type: "number",
    message: "Enter a number: "
})
const squaredNum = square(num.input);
console.log(`Square of ${num.input} is: ${squaredNum}`);
