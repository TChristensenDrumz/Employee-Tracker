ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mySQLpassword2020';

DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;
USE employeeTracker_db;

CREATE TABLE department (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL
);

CREATE TABLE employee (
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;