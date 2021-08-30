const express = require("express");
const employeeDatabase = require("./db/employees_db");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get("/api/department", (req, res) => {
    employeeDatabase.selectAllDepartments().then(([rows]) => {
        console.log(rows);
        res.json(rows)
    })
});

app.get("/api/role", (req, res) => {
    employeeDatabase.selectAllRoles().then(([rows]) => {
        console.log(rows);
        res.json(rows)
    })
});

app.get("/api/employee", (req, res) => {
    employeeDatabase.selectAllEmployees().then(([rows]) => {
        console.log(rows);
        res.json(rows)
    })
});

app.listen(PORT, () => console.log(`RUNNING ON ${PORT}!`));
