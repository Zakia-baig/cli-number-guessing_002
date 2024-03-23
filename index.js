#! /usr/bin/env node
import inquirer from "inquirer";
const RandomNunber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    { message: "Please guess a number between 1-6 :", type: "numberguess", name: "Number" },
]);
if (answer.numberguess === "Randomnumber") {
    console.log("Congratulation you guesss right");
}
else {
    console.log("You guess wrong number");
}
;
