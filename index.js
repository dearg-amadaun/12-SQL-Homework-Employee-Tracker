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
  console.log('MySql Connected');
  initInquirer();
});

//Inquirer prompt (node.js unit 09)
// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

const mainMenu = [
  {
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
    }
];

    function initInquirer() {
      inquirer.prompt(mainMenu)
      if (select.action === 'View All Departments') {
        viewAllDepartments();
      } else if (select.action === 'Add Department') {
        addDepartment();
      } else if (select.action === 'View All Roles') {
        viewAllRoles();
      } else if (select.action === 'Add Role') {
        addRole();
      } else if (select.action === 'View All Employees') {
        viewAllEmployees();
      } else if (select.action === 'Add Employee') {
        addEmployee();
      } else if (select.action === 'Update Employee Role') {
        updateEmployeeRole();
      } else if (select.action === 'End') {
        connection.end();
      }
    };    


/*View Department and Add New Department*/
function viewAllDepartments() {
  var query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
      console.log(`DEPARTMENTS:`)
         res.forEach(department => {
          console.log(`ID: ${department.id} | Name: ${department.name}`)
      });
      start();
      });
  };

  function addDepartment() {
    inquirer.prompt({
      name: 'departmentInput',
      type: 'input',
      message: 'Please input a new department.'
    })
    .then(function(answer) {
      var query = "INSERT INTO department (name) VALUES ( ? )"
        connection.query(query, answer.department, function(err, res) {
          console.log(`Department ${(answer.department).touppercase()} added successfully.`)
      })
    })
  };


  /*View Roles and Add New Roles*/
function viewAllRoles() {
  let query = "SELECT * FROM role";
    connection.query(query, function(err, res) {
      console.log(`ROLES:`)
         res.forEach(role => {
          console.log(`ID: ${role.id} | TITLE: ${role.title} | SALARY: ${role.salary} | DEPARTMENT ID: ${role.department_id}`);
      });
      start();
      });
  };

  function addRole() {
    connection.query('SELECT * FROM department', function(err, res) {
      if(err) throw(err);
      inquirer.prompt([{
        name: 'role',
        type: 'input',
        message: 'Please input a new role.',
      },
      {
        name: 'salary',
        type: 'input',
        message: 'Please input new role salary.',
      },
      {
        name: 'selectDept',
        type: 'list',
        message: 'Please select department for new role.',
        choices: function() {var deptArray = [];
          res.forEach(res => {deptArray.push(res.name);
          })
          return deptArray;
      }
     }])
     .then(function(answer) {
      const department = answer.departmentName;
      connection.query('SELECT * FROM DEPARTMENT', function(err, res) {
      
      if (err) throw (err);
        let filteredDept = res.filter(function(res) {
          return res.name == department;
      })
     let id = filteredDept[0].id;
     let message = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
     let values = [answer.title, parseInt(answer.salary), id]
     console.log(values);
      connection.query(message, values,
          function(err, res, fields) {
            console.log(`Role ${(values[0]).toUpperCase()} added successfully.`
            )});
              viewRoles()
          })
      })
  })
};


/*View Employees and Add New Employees */
function viewAllEmployees() {
  var query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
      console.log(`EMPLOYEES:`)
         res.forEach(employee => {
          console.log(`ID: ${employee.id} | NAME: ${employee.first_name} ${employee.last_name} | ROLE ID: ${employee.role_id} | DEPARTMENT ID: ${role.department_id} | MANAGER ID: ${employee.manager_id}`);
      })
      start();
      })
  };
  
   function addEmployee() {
    connection.query('SELECT * FROM role', function(err, result) {
        if(err) throw(err);
        inquirer.prompt([{
            name: "first",
            type: "input",
            message: "Please input employye first name.",
          }, 
          {
            name: "last",
            type: "input",
            message: "Please input employye last name.",
          },
          {
            name: "role",
            type: "list",
            message: "Please select employee role",
            choices: function() {
             rolesArray = [];
              result.forEach(result => {
                roleArray.push(result.title);
                })
                return roleArray;
              }
         }
      ]) 
      .then(function(answer) {
        const department = answer.departmentName;
        connection.query('SELECT * FROM DEPARTMENT', function(err, res) {
        
        if (err) throw (err);
          let filteredDept = res.filter(function(res) {
            return res.name == department;
        })
       let id = filteredDept[0].id;
       let message = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
       let values = [answer.title, parseInt(answer.salary), id]
       console.log(values);
        connection.query(message, values,
            function(err, res, fields) {
              console.log(`Role ${(values[0]).toUpperCase()} added successfully.`
              )});
                viewRoles()
            })
        })
    })
  };