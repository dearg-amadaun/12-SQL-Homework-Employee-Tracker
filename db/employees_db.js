const connection = require("./connection");

class EmployeeDatabase {
    constructor(connection) {
        this.connection = connection;
    }

    selectAllDepartments() {
        return this.connection.promise().query("SELECT * FROM department");
    }

    selectAllRoles() {
       return this.connection.promise().query("SELECT * FROM role"); 
    }

    selectAllEmployees() {
        return this.connection.promise().query("SELECT * FROM employee");
    }
}

module.exports = new EmployeeDatabase(connection);