const generateCards = require("./src/generateCards");
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamArray = [];


//need function and prompt for adding Manager and additional employees
const addManager = () => {
    return inquirer
        .prompt([{
                type: "input",
                message: "Hello, Manager! What is your name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is your ID #?",
                name: "id",
            },
            {
                type: "message",
                message: "What is your email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is your office #?",
                name: "email",
            },
        ])
        .then((managerResponse) => {
            const {
                name,
                id,
                email,
                officeNumber
            } = managerResponse;
            const manager = new Manager(name, id, email, officeNumber);
            teamArray.push(manager);
        });
};

//employee prompts now needed for the additional employees.
const addEmployee = () => {
        return inquirer
            .prompt([{
                        type: "list",
                        message: "Please select your employee's role.",
                        choices: ["Engineer", "Intern"],
                        name: "role",
                    },
                    {
                        type: "message",
                        message: "What is the employee's name?",
                        name: "name",
                    },
                    {
                        type: "message",
                        message: "What is the employee's ID#?",
                        name: "id"
                    }