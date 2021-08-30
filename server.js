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
    const departmentId = req.params.id;

    employeeDatabase.addRole(departmentId, title, salary).then((data) => {
        if (data[0].affectedRows) {
            res.json(`${title}, ${salary}, and ${departmentId} have been added to the database`)
        }
    })
});

//Add Employee
app.post("/api/add-role", (req, res) => {
    const {first_name} = req.body;
    const {last_name} = req.body;
    const {role_id} = req.params.id;
    const {manager_id} = req.params.id;

    employeeDatabase.addEmployee(first_name, last_name, role_id, manager_id).then((data) => {
        if (data[0].affectedRows) {
            res.json(`Employee ${first_name} ${ last_name}, ${role_id}, ${manager_id} has been added to the database`)
        }
    })
});




app.listen(PORT, () => console.log(`RUNNING ON ${PORT}!`));
