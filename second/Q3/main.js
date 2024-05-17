import inquirer from "inquirer";
const Friend = ["ALI", "AHMAD", "AHSAN"];
const name = await inquirer.prompt({
    name: "input",
    type: "input",
    message: "Enter your name in capital alphabets to verify: "
});
if (Friend.includes(name.input.toUpperCase())) {
    console.log(`The entered name ${name.input} is in my Friendslist.`);
}
else {
    console.log(`The entered name ${name.input} is not in my Friendslist.`);
}
