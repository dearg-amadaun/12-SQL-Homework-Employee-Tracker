//Dependencies
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const table = require('console.table');
const { response } = require('express');
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create MYSQL connection
const connection = mysql.createConnection(
  {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rootr00t!',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);
connection.connect((err) => {
  if(err) { 
    throw err;
  }
  console.log('MySql Connected');
  run();
});

//Inquirer prompt (node.js unit 09)
function run() {
  inquirer.prompt([{
              type: 'list',
              name: 'menu',
              message: 'What would you like to do?',
              choices: [
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
        ])
    .then(function(select) {
      if (select.choice === 'View All Departments') {
        viewAllDepartments();
      } else if (select.choice === 'Add Department') {
        addDepartment();
      } else if (select.choice === 'View All Roles') {
        viewAllRoles();
      } else if (select.choice === 'Add Role') {
        addRole();
      } else if (select.choice === 'View All Employees') {
        viewAllEmployees();
      } else if (select.choice === 'Add Employee') {
        addEmployee();
      } else if (select.choice === 'Update Employee Role') {
        updateEmployeeRole();
      } else if (select.choice === 'End') {
        connection.end();
      }
    })
  };    

/*View Department*/
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
  
  /*Add Department */  
  function addDepartment() {
    inquirer.prompt({
      type: 'input',
      name: 'departmentInput',
      message: 'Please input a new department.'
    })
    .then(function(answer) {
      var query = "INSERT INTO department (name) VALUES ( ? )"
      connection.query(query, answer.department, function(err, res) {
        console.log(`Department ${(answer.department).touppercase()} added successfully.`)
      })
    })
  };
  
  /*View Roles*/
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
 
  /*Add Role */ 
   function addRole() {
     connection.query('SELECT * FROM department', function(err, res) {
       if(err) throw(err);
       inquirer.prompt([{
         type: 'input',
         name: 'role',
         message: 'Please input a new role.',
       },
       {
         type: 'input',
         name: 'salary',
         message: 'Please input new role salary.',
       },
       {
         type: 'list',
         name: 'selectDept',
         message: 'Please select department for new role.',
         choices: function() {
           var deptSelArray = [];
           res.forEach(res => {deptSelArray.push(res.name);
           })
           return deptSelArray;
       }
      }])
      .then(function(answer) {
       const department = answer.departmentName;
       connection.query('SELECT * FROM department', function(err, res) {
       
       if (err) throw (err);
         var filteredDept = res.filter(function(res) {
           return res.name == department;
       })
      var id = filteredDept[0].id;
      var message = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
      var values = [answer.title, parseInt(answer.salary), id]
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
  
 /*View Employees*/
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
  
/*Add Employee */
   function addEmployee() {
    connection.query('SELECT * FROM role', function(err, result) {
        if(err) throw(err);
        inquirer.prompt([{
            type: "input",
            name: "first",
            message: "Please input employee first name.",
          }, 
          {
            type: "input",
            name: "last",
            message: "Please input employee last name.",
          },
          {
            type: "list",
            name: "role",
            message: "Please select employee role",
            choices: function() {
             roleArray = [];
              result.forEach(result => {
                roleArray.push(result.title);
                })
                return roleArray;
              }
         }
      ]) 
      .then(function(answer) {
        const role = answer.roleName;
        connection.query('SELECT * FROM role', function(err, res) {
        
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