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
            console.log(res)
        });
        console.log("hello");
    }
    if (choice === "View all Roles") {
        employee_db.viewAllRoles();
    }
    if (choice === "View all Employees") {
        employee_db.viewAllEmployees();
    }
    if (choice === "Add a Department") {
        employee_db.addADepartment();
    }
    if (choice === "Add a Role") {
        employee_db.addARole();
    }
    if (choice === "Update an Employe") {
        employee_db.updateAnEmployee();
    }
    if (choice === "Exit") {
        connection.end();
    }
  });

//   function viewAllDepartments() {
//       var deptChoice = "SELECT * FROM department";
//       database.query(deptChoice, (error, data) => {
//           if(error){
//               throw error;
//           }
//           console.table(data);
//           menu();
//       })
//   }

 
}
