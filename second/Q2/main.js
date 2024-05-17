import inquirer from "inquirer";
const dynamicNumber = 7;
const userNumber = await inquirer.prompt({
    name: "input",
    type: "number",
    message: "Enter a number to match with mine number: "
});
if (userNumber.input > dynamicNumber) {
    console.log(`The entered number ${userNumber.input} is greater than ${dynamicNumber}.`);
}
else if (userNumber.input < dynamicNumber) {
    console.log(`The entered number ${userNumber.input} is less than ${dynamicNumber}.`);
}
else {
    console.log(`The entered number ${userNumber.input} is equal to ${dynamicNumber}.`);
}
