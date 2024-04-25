#! /usr/bin/env node
import inquirer from "inquirer";
console.log("welcome todo list");
let todos = [];
let condition = true;
while (condition) {
    let todoquestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add in you todos?"
        },
        {
            name: 'secondQuestion',
            type: "confirm",
            message: 'would you like to add more in your todos?',
            default: "true"
        }
    ]);
    todos.push(todoquestions.firstQuestion);
    console.log(todos);
    condition = todoquestions.secondQuestion;
}
