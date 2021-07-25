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


// View Departments


// View Roles


// View Employees


// Add Departments


// Add Roles


// Add Employees


// Update Employee Roles


// Update Employee Managers


// Delete Departments


// Delete Roles


// Delete Employees


// Connect to mysql server and sql database
connection.connect((err) => {
    if (err) throw err;
    start();
})