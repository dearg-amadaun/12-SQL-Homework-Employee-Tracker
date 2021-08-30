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

//View One Department
    // viewOneDepartment(id) {
    //     return this.connection.promise().query("SELECT * FROM department WHERE id = ?", id)
    // }

//Add Department
    addDepartment(name) {
        return this.connection.promise().query("INSERT INTO department(department_name) VALUES (?)", name)
    }


//Add Role



//Add Employee
}

module.exports = new EmployeeDatabase(connection);