USEemployees_db 

/*
```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```
*/

/*
WHEN I start the application
THEN I am presented with a formatted table showing department names and department ids

ID name
-- ------------
1 = SALES 
2 = Engineering 
3 = Finance 
4 = Legal 
*/

---

/*
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments

Inquirer
? What would you like to do?
View All Employees
Add Employee
Update Employee Roler
View All Roles
Add Role
View All Departments
Add Department
*/

---

/*
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

Roles
id  title              department   salary
--  -----------------  -----------  ------  
1   Sales Lead         Sales        100000
2   Salesperson        Sales        80000 
3   Lead Engineer      Engineering  150000
4   Software Engineer  Engineering  120000
5   Account Manager    Finance      160000
6   Accountant         Finance      125000
7   Legal Team Lead    Legal        250000
8   Lawyer             Legal        190000
*/

---

/*
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

id  first_name  last_name  title              department   salary  manager
--  ----------  ---------  -----------------  -----------  ------  ----------------
1   John        Doe        Sales Lead         Sales        100000  null
2   Mike        Chan       Salesperson        Sales        80000   John Doe
3   Ashley      Rodriguez  Lead Engineer      Engineering  150000  null
4   Kevin       Tupik      Software Engineer  Engineering  120000  Ashley Rodriguez
5   Kunal       Singh      Account Manager    Finance      160000  null
6   Malia       Brown      Accountant         Finance      125000  Kunal Singh
7   Sarah       Lourd      Legal Team Lead    Legal        250000  null
8   Tom         Allen      Lawyer             Legal        190000  Sarah Lourd
*/

---

/*
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
*Inquirer*

? What would you like to do? Add Department

? What is the Name of the department? ______

*Added ______ to the database*

*/

---

/*
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

*Inquirer*

? What Would you like to do? Add Role 

? What is the name of the role? ______

? What is the salary of the role? ______

? Which department does the role belong to?
*List of departments*

> Engineering
  Finance
  Legal
  Sale
  Service

*Added *SELECTION* to the database*
*/

---

/*
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

? What is the employee's first name?

? What is the employee's last name?

? What is the employee's role?
*List of positions*

> Sales Lead
  Salesperson
  Lead Engineer
  Account Manager
  Accountant
  Legal Team Lead
  Lawyer

? Who is the employee's manager?
*List of managers*

> manager
  manager
  manager
  manager
  etc...
*/

---

/*
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

? Which employee's role do you want to update?
*List of Employees*
 
> employee
  employee
  employee
  employee
  etc...

? Which role do you want to assign the selected employee?
*List of Roles*

> Sales Lead
  Salesperson
  Lead Engineer
  Software Engineer
  Account Manager
  Accountant
  Legal Team Lead
*/
