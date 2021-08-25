--Create database
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

-- Creates the table "department" within employees_db and increments the id --
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

--Creates the roles table--
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(19,4) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

--Creates the employee table--
CREATE TABLE employee (
    id IN NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL, 
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY (id)
); 


