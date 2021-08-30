const express = require("express");
const employeeDatabase = require("./db/employee_db");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json());

//View all departments
app.get("/api/department", (req, res) => {
    employeeDatabase.viewAllDepartments().then(([rows]) => {
        res.json(rows)
    })
});

//View all roles
app.get("/api/role", (req, res) => {
    employeeDatabase.viewAllRoles().then(([rows]) => {
        res.json(rows)
    })
});

//View all employees
app.get("/api/employee", (req, res) => {
    employeeDatabase.viewAllEmployees().then(([rows]) => {
        res.json(rows)
    })
});

//View One Department
// app.get("/api/department/:id", (req, res) => {
//     const id = req.params.id;

//     employeeDatabase.viewOneDepartment(id).then(([rows]) => {
//         if (rows.length === 0) {
//             console.log("NO DEPARTMENT FOUND")
//         }
//         res.json(rows)
//     })
// });

//Add department
app.post("/api/add-department", (req, res) => {
    const {departmentName} = req.body;

    employeeDatabase.addDepartment(departmentName).then((data) => {
        if (data[0].affectedRows) {
            res.json(`${departmentName} has been added to the database`)
        }
    })
});


//Add Role
app.post("/api/add-role", (req, res) => {
    const {title} = req.body;
    const {salary} = req.body;
    const id = req.params.id;

    employeeDatabase.addRole(id, title, salary).then((data) => {
        if (data[0].affectedRows) {
            res.json(`${title}, ${salary}, and ${id} have been added to the database`)
        }
    })
});


//Add Employee
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database




app.listen(PORT, () => console.log(`RUNNING ON ${PORT}!`));
