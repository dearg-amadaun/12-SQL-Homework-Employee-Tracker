const connection = require("./connection");

class EmployeeDatabase {
    constructor(connection) {
        this.connection = connection;
    }

//View all Departments
    viewAllDepartments() {
        return this.connection.promise().query("SELECT * FROM department");
    }

//View all roles
    viewAllRoles() {
        return this.connection.promise().query("SELECT * FROM role");
    }

//View all Employees
    viewAllEmployees() {
        return this.connection.promise().query("SELECT * FROM employee");
    }

//Add Department
    addDepartment(departmentname) {
        return this.connection.promise().query("INSERT INTO department(department_name) VALUES (?)", departmentname)
    }


// dd Role
/*WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database*/
    addRole(departmentId, title, salary) {
        return this.connection.promise().query("INSERT INTO role(department_id, role_title, salary) VALUES(?, ?, ?)",
        [departmentId, title, salary])
    }

//Add Employee
addEmployee(first_name, last_name, role_id, manager_id) {
    return this.connection.promise().query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`, 
    [first_name, last_name, role_id, manager_id]);
}




}
module.exports = new EmployeeDatabase(connection);