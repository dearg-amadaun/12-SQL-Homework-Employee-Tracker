const mysql = require("mysql2");
const express = require("express");
const employeeDatabase = require("./db/employee_db");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json());



/*------------------------- Department Functionality -------------------------*/
//View all departments
app.get("/api/department", (req, res) => {
    employeeDatabase.viewAllDepartments().then(([rows]) => {
        res.json(rows)
    })
});

//View One Department
app.get("/api/department/:id", (req, res) => {
    const id = req.params.id;

    employeeDatabase.viewOneDepartment(id).then(([rows]) => {
        if (rows.length === 0) {
            console.log("NO DEPARTMENT FOUND!")
        }
        res.json(rows)
    })
});

//Add department
app.post("/api/add-department", (req, res) => {
    const { department_name } = req.body;

    employeeDatabase.addDepartment(department_name).then((data) => {
        if (data[0].affectedRows) {
            res.json(`${ department_name } has been added to the database`)
        }
    })
});

//Delete Department
app.delete("/api/department/:id", (req, res) => {
    const id = req.params.id;

    employeeDatabase.deleteDepartment(id).then((data) => {
        if (data[0].affectedRows) {
            res.json(`Department ${ id } has been deleted`)
        }
    })
})


/*------------------------- Role Functionality -------------------------*/

//View all roles
app.get("/api/role", (req, res) => {
    employeeDatabase.viewAllRoles().then(([rows]) => {
        res.json(rows)
    })    
});

//View one role
app.get("/api/role/:id", (req, res) => {
    const id = req.params.id;

    employeeDatabase.viewOneRole(id).then(([rows]) => {
        if (rows.length === 0) {
            console.log("NO ROLE FOUND")
        }
        res.json(rows)
    })
});

//Add Role
app.post("/api/add-role", (req, res) => {
    const { title } = req.body;
    const { salary } = req.body;
    const id = req.params.id;
    employeeDatabase.addRole(id, title, salary).then((data) => {
        if (data[0].affectedRows) {
            res.json(`${ title }, ${ salary }, and ${ id } have been added to the database`)
        }
    })
});

app.delete("/api/role/:id", (req, res) => {
    const id = req.params.id;

    employeeDatabase.deleteRole(id).then((data) => {
        if (data[0].affectedRows) {
            res.json(`Role ${id} has been deleted`)
        }
    })
});


/*------------------------- Employee Functionality -------------------------*/

//View all employees
app.get("/api/employee", (req, res) => {
    employeeDatabase.viewAllEmployees().then(([rows]) => {
        res.json(rows)
    })    
});    

//View one employee
app.get("/api/employee/:id", (req, res) => {
    const id = req.params.id;

    employeeDatabase.viewOneEmployee(id).then(([rows]) => {
        if (rows.length === 0) {
            console.log("NO EMPLOYEE FOUND")
        }
        res.json(rows)
    })
});

//Add Employee
app.post("/api/add-employee", (req, res) => {
    const { first_name } = req.body;
    const { last_name } =req.body;
    const role_id = req.params.roleId;
    const manager_id = req.params.managerId;

    employeeDatabase.addEmployee(first_name, last_name, role_id, manager_id).then((data) => {
        if (data[0].affectedRows) {
            res.json(`${ first_name }  ${ last_name}, ${role_id}, ${manager_id} has been added to the Database`)
        }
    });
});

app.delete("/api/employee/:id", (req, res) => {
    const id = req.params.id;

    employeeDatabase.deleteEmployee(id).then((data) => {
        if (data[0].affectedRows) {
            res.json(`Employee ${id} has been deleted`)
        }
    })
});


app.listen(PORT, () => console.log(`RUNNING ON ${PORT}!`));
