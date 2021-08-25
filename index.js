//Dependencies
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const table = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create DB connection
const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'rootr00t!',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

//Connect to DB
connection.connect((err) => {
  if(err) {
    throw err;
  }
  initInquirer();
  console.log('MySql Connected');
});

//Inquirer prompt (node.js unit 09)
// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

function initInquirer() {
  inquirer.prompt({
      type: 'list',
          name: 'menu',
          message: 'What would you like to do?',
          Choices: [
            'View All Departments',
            'Add Department',
            'View All Roles',
            'Add Role',
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'End'
          ]  
    }) 
    //Response tree
    .then(function(select) {
      if (select.action === 'View All Departments') {
        viewAllDepartments();
      } if (select.action === 'Add Department') {
        addDepartment();
      } if (select.action === 'View All Roles') {
        viewAllRoles();
      } if (select.action === 'Add Role') {
        addRole();
      } if (select.action === 'View All Employees') {
        viewAllEmployees();
      } if (select.action === 'Add Employee') {
        addEmployee();
      } if (select.action === 'Update Employee Role') {
        updateEmployeeRole();
      } if (select.action === 'End') {
        connection.end();
      }
    })     
}    

