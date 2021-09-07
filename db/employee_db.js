const connection = require("./connection");

class EmployeeDatabase {
    constructor(connection) {
        this.connection = connection;
    }


/*------------------------- Department Functionality -------------------------*/

//View all Departments
    viewAllDepartments() {
        return this.connection.promise().query(`SELECT * FROM department`);
    }
    
//View one Department
    viewOneDepartment(id) {
        return this.connection.promise().query(`SELECT * FROM department WHERE id = ?`, id)
    }
    
//Add Department
        addDepartment(department_name) {
            return this.connection.promise().query(`INSERT INTO department(name) VALUES (?)`, department_name)
        }

//Delete Department
    deleteDepartment(id) {
        return this.connection.promise().query(`DELETE FROM department WHERE id = ?`, id)
    }

/*------------------------- Role Functionality -------------------------*/

//View all roles
    viewAllRoles() {
        return this.connection.promise().query(`SELECT * FROM role`);
    }

//View one role
    viewOneRole(id) {
    return this.connection.promise().query(`SELECT * FROM role WHERE id = ?`, id)
    }

//Add role
    addRole(id, title, salary) {
        return this.connection.promise().query(`INSERT INTO role(department_id, title, salary) VALUES (?, ?, ?)`,
        [id, title, salary])
    }

//Update Role

//Delete role
    deleteRole(id) {
        return this.connection.promise().query(`DELETE FROM role WHERE id = ?`, id)
    }

/*------------------------- Employee Functionality -------------------------*/

//View all Employees
    viewAllEmployees() {
        return this.connection.promise().query(`SELECT * FROM employee`);
    }

//View one Employee
    viewOneEmployee(id) {
        return this.connection.promise().query(`SELECT * FROM employee WHERE id = ?`, id)
    }


//Add Employee
    addEmployee(first_name, last_name, role_id, manager_id) {
        return this.connection.promise().query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`, 
        [first_name, last_name, role_id, manager_id]);
    }

//Delete Employee
    deleteEmployee(id) {
        return this.connection.promise().query(`DELETE FROM employee WHERE id = ?`, id)
    }

}
module.exports = new EmployeeDatabase(connection);