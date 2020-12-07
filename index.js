const mysql = require("mysql");
const inquirer = require("inquirer");

connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mySQLpassword2020",
    database: ""
});