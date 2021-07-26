// Required Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');
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
const viewDepartments = () => {
    connection.query('SELECT * FROM departments', (err, res) => {
        if (err) throw err;
        console.log('\n----------\nDepartments\n----------');
        console.table(res);
        start();
    });
};

// View Roles
const viewRoles = () => {
    connection.query('SELECT * FROM roles', (err, res) => {
        if (err) throw err;
        console.log('\n----------\nRoles\n----------');
        console.table(res);
        start();
    });
};

// View Employees
const viewEmployees = () => {
    connection.query('SELECT * FROM employees', (err, res) => {
        if (err) throw err;
        console.log('\n----------\nEmployees\n----------');
        console.table(res);
        start();
    });
};

// ADD PROMPTS
const addPrompt = () => {
    inquirer
        .prompt({
            type: 'list',
            name: 'addMenu',
            message: 'What would you like to add?',
            choices: ['Departments', 'Roles', 'Employees'],
        })
        .then((answer) => {
            switch (answer.addMenu) {
                case 'Departments':
                    addDepartments();
                    break;
                case 'Roles':
                    addRoles();
                    break;
                case 'Employees':
                    addEmployees();
                    break;
                default:
                    start();
                    break;
            }
        });
};

// Add Departments


// Add Roles


// Add Employees


// UPDATE PROMPTS
const updatePrompt = () => {
    inquirer
        .prompt({
            type: 'list',
            name: 'updateMenu',
            message: 'What would you like to update?',
            choices: ['Roles', 'Managers'],
        })
        .then((answer) => {
            switch (answer.updateMenu) {
                case 'Roles':
                    updateRoles();
                    break;
                case 'Employees':
                    updateEmployees();
                    break;
                default:
                    start();
                    break;
            }
        });
};

// Update Employee Roles


// Update Employee Managers


// DELETE PROMPTS
const deletePrompt = () => {
    inquirer
        .prompt({
            type: 'list',
            name: 'deleteMenu',
            message: 'What would you like to delete?',
            choices: ['Departments', 'Roles', 'Employees'],
        })
        .then((answer) => {
            switch (answer.deleteMenu) {
                case 'Departments':
                    deleteDepartments();
                    break;
                case 'Roles':
                    deleteRoles();
                    break;
                case 'Employees':
                    deleteEmployees();
                    break;
                default:
                    start();
                    break;
            }
        });
};

// Delete Departments


// Delete Roles


// Delete Employees


// Connect to mysql server and sql database
connection.connect((err) => {
    if (err) throw err;
    start();
});