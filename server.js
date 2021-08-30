const express = require("express");
const employeeDatabase = require("./db/employees_db");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get("/api/department", (req, res) => {
    employeeDatabase.selectAllDepartments().then((data) => {
        console.log(data);
    })
});

app.get("/api/role", (req, res) => {
    employeeDatabase.selectAllRoles().then((data) => {
        console.log(data);
    })
});

app.get("/api/employee", (req, res) => {
    employeeDatabase.selectAllEmployees().then((data) => {
        console.log(data);
    })
});

app.listen(PORT, () => console.log(`RUNNING ON ${PORT}!`));
