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
            name: "choices",
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
    const {choices} = answers;
    if (choices === "View all Departments") {
        employee_db.viewAllDepartments().then(([res]) => {
            console.log(res)
        });
        console.log("hello");
    }
    if (choices === "View all Roles") {
        employee_db.viewAllRoles();
    }
    if (choices === "View all Employees") {
        employee_db.viewAllEmployees();
    }
    if (choices === "Add a Department") {
        employee_db.addADepartment();
    }
    if (choices === "Add a Role") {
        employee_db.addARole();
    }
    if (choices === "Add an Employee") {
        employee_db.addAnEmployee();
    }
    if (choices === "Update an Employe") {
        employee_db.updateAnEmployee();
    }
    if (choices === "Exit") {
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
