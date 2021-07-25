// Required Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
require('dotenv').config();

// Create connection for SQL database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Prompt user for the action they should take
const start = () => {
    console.log('Welcome to the Employee Tracker');
    inquirer
        .prompt({
            type: 'list',
            name: 'mainMenu',
            message: 'What would you like to do?',
            choices: ['VIEW', 'ADD', 'UPDATE', 'DELETE', 'EXIT'],
        })
        .then((answer) => {
            if (answer.mainMenu === 'VIEW') {
                viewPrompt();
            } else if (answer.mainMenu === 'ADD') {
                addPrompt();
            } else if (answer.mainMenu === 'UPDATE') {
                updatePrompt();
            } else if (answer.mainMenu === 'DELETE') {
                deletePrompt();
            } else {
                connection.end();
            }
        });
};

// VIEW
// View Departments


// View Roles


// View Employees


// ADD
// Add Departments


// Add Roles


// Add Employees


// UPDATE
// Update Employee Roles


// Update Employee Managers


// DELETE
// Delete Departments


// Delete Roles


// Delete Employees


// Connect to mysql server and sql database
connection.connect((err) => {
    if (err) throw err;
    start();
})