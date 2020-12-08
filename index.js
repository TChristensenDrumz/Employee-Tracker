const mysql = require("mysql");
const inquirer = require("inquirer");

connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mySQLpassword2020",
    database: "employeeTraker_db"
});

function runEmployeeTracker() {
    connection.query("SELECT * FROM postings", function(err, res){
        inquirer.prompt([
            {
                type: "list",
                message: "What would you like to do?",
                choices: [
                            'ADD DEPARTMENTS', 
                            'ADD ROLES', 
                            'ADD EMPLOYEES', 
                            'VIEW DEPARTMENTS', 
                            'VIEW ROLES', 
                            'VIEW EMPLOYEES', 
                            'UPDATE EMPLOYEE ROLE',
                            'EXIT'
                         ],
                name: "action"
            },
        ]).then(answers => {
            switch (answers) {
                case answers.action === 'ADD DEPARTMENTS':
                    inquirer.prompt([
                        {
                            type: 'input',
                            message: 'What department are you adding?',
                            name: 'department'
                        }
                    ]).then(answers => {
                        connection.query("INSERT INTO department SET ?", {
                            name: answers.department
                        },
                        function(err, res) {
                            if (err) throw err;
                            console.log("Department added");
                        });
                    });
                    break;
            }

            if(answers.action === 'EXIT') {
                connection.end();
            }

            else {
                runEmployeeTracker();
            }
        });
    });
}

