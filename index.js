const cTable = require('console.table');

const inquirer = require("inquirer");

start();

function start() {
    inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: "What do you want to do?",
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "Exit",
            ]
        }

    ]).then(answer => {
        if (answer.choice === "Add Department") {
            // addDept()
        }
        else if (answer.choice === "Add Role") {
            // addDept()
        }
        else if (answer.choice === "Add Employee") {
             // addEmployee()
        }
        else if (answer.choice === "") {
            // exit()
        }
    })
};



