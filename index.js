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
            },
            {
                type: "message",
                message: "What is the employee's email address?",
                name: "email",
            },
            {
                when: (this) => this.role === "Engineer",
                type: "input",
                message: "What is the employee's Github username?",
                name: "github",
            },
            {
                when: (this) => this.role === "Intern",
                type: "input",
                message: "What school did the employee attend?",
                name: "school",
            },
        ])
        .then((employeeResponse) => {
            let {
                name,
                id,
                email,
                role,
                github,
                school
            } = employeeResponse
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);
            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);
            }
            teamArray.push(employee);
        });
}

//initialize write to HTML
const writeFile = (data) => {
    fs.writeFile("./dist/index.html", data, (err) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Thank you, your team has been created!");
        }
    });
};

//need to initialize addManager function to write to teamArray
addManager()
    .then(addEmployee)
    .then((teamArray) => {
        return generateCards(teamArray);
    })
    .then((html) => {
        return writeFile(html);
    })
    .catch((err) => {
        console.log(err);
    });