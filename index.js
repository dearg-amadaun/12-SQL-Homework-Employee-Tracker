//Dependencies
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

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
  initPrompt();
  console.log("MySql Connected");
});

//Inquirer prompt
function initPrompt(); 