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



//Add Employee

app.listen(PORT, () => console.log(`RUNNING ON ${PORT}!`));
