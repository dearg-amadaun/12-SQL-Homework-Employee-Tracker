const inquirer = require("inquirer");
require("./server.js");
require("console.table");

const connection = require("./db/connection");
const employee_db = require("./db/employee_db")


/*Inquirer Prompts*/

menu ();
function menu() {
    inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: "Please choose an option from the list:",
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
    console.log(answers);
    const {choice} = answers;
    if (choice === "View all Departments") {
        employee_db.viewAllDepartments().then(([res]) => {
            console.table(res)
            menu()
        });
    }
    if (choice === "View all Roles") {
        employee_db.viewAllRoles().then(([res]) => {
            console.table(res)
            menu()
        });
    }
    if (choice === "View all Employees") {
        employee_db.viewAllEmployees().then(([res]) => {
            console.table(res)
            menu()
        });
    }
    if (choice === "Add Department") {
        addDepartment();
    }
    if (choice === "Add Role") {
        addRole();
    }
    if (choice === "Update Employee") {
        updateEmployee();
    }
    if (choice === "Exit") {
        connection.end();
    }
  });

  function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the new Department?',
            name: 'name'
        }
    ]).then(function (name) {
        connection.query('INSERT INTO department SET ?',
            {
                name: name
            },
            function (err, name) {
                if (err) throw err
                console.table(name);
                menu();
            }
        )
    })
}
 
};
