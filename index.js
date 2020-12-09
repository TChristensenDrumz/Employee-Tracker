const mysql = require("mysql");
const inquirer = require("inquirer");
const questions = require("./questions");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mySQLpassword2020",
    database: "employeeTracker_db"
});

async function init() {
    const answers = await inquirer.prompt(questions.actions);
    switch (answers.action) {
        case 'ADD DEPARTMENT':
            addDepartment();
            break;
        case 'ADD ROLE':
            addRole();
            break;
    }
}

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What department are you adding?',
            name: 'department'
        }
    ]).then(answers => {
        connection.query("INSERT INTO department SET ?", { name: answers.department }, function(err, data) {
            if (err) throw err;
            console.log("Department added");
        });
    });
}

function addRole() {
    connection.query("SELECT * FROM department", function(err, data) {
        if (err) throw err;
        inquirer.prompt([
            {
                type: 'input',
                message: 'What role are you adding?',
                name: 'role'
            },
            {
                type: 'input',
                message: "What is this role's salary?",
                name: 'salary'
            },
            {
                type: "list",
                message:"Which department does this role work in?",
                choices: function() {
                    const options = [];
                    for(let i = 0; i < data.length; i++) {
                        options.push(data[i].name);
                    }
                    return options;
                },
                name: 'department'
            }
        ]).then(answers => {
            for(let i = 0; i < data.length; i++) {
                if(answers.department === data[i].name) {
                    answers.department_id = data[i].id;
                }
            }
            connection.query("INSERT INTO role SET ?", {
                title: answers.role,
                salary: answers.salary,
                department_id: answers.department_id
            },
            function(err, res) {
                if (err) throw err;
                console.log("Role added");
            });
        });
    });
}

init();

