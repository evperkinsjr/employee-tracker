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
            switch (answer.mainMenu) {
                case 'VIEW':
                    viewPrompt();
                    break;
                case 'ADD':
                    addPrompt();
                    break;
                case 'UPDATE':
                    updatePrompt();
                    break;
                case 'DELETE':
                    deletePrompt();
                    break;
                default:
                    connection.end();
            }
        });
};

// VIEW PROMPTS
const viewPrompt = () => {
    inquirer
        .prompt({
            type: 'list',
            name: 'viewMenu',
            message: 'What would you like to view?',
            choices: ['Departments', 'Roles', 'Employees'],
        })
        .then((answer) => {
            switch (answer.viewMenu) {
                case 'Departments':
                    viewDepartments();
                    break;
                case 'Roles':
                    viewRoles();
                    break;
                case 'Employees':
                    viewEmployees();
                    break;
                default:
                    start();
                    break;
            }
        });
};
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