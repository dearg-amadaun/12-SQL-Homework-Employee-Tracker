const inquirer = require("inquirer");
require("./server.js");
require("console.table");

const connection = require("./db/connection");

/*Inquirer Prompts*/
    inquirer.prompt([
        {
            name: "Menu",
            type: "list",
            message: "Please choose an option from the menu:",
            choices: [
                "View all Departments",
                "View all Roles",
                "View all Employees", 
                "Add a Department",
                "Add a Role",
                "Add an Employee",
                "Update an Employee Role",
                "Exit"
                ]
    }
])
.then((answers) => {
    const {choices} = answers;
    if (choices === "View all Departments") {
        viewAllDepartments();
    }
    if (choices === "View all Roles") {
        viewAllRoles();
    }
    if (choices === "View all Employees") {
        viewAllEmployees();
    }
    if (choices === "Add a Department") {
        addADepartment();
    }
    if (choices === "Add a Role") {
        addARole();
    }
    if (choices === "Add an Employee") {
        addAnEmployee();
    }
    if (choices === "Update an Employe") {
        updateAnEmployee();
    }
    if (choices === "Exit") {
        connection.end();
    }
  });
