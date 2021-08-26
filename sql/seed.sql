USEemployees_db 

--SQL Units 17-18
--Department--
/*ID name
-- ------------
1 = SALES 
2 = Engineering 
3 = Finance 
4 = Legal 
*/
INSERT INTO department(department_name)
VALUES("Engineering"), 
      ("Sales"), 
      ("Finance"), 
      ("Legal"), 
      ("Marketing");


--Roles--
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
INSERT INTO role(title, role_id, department, salary)
VALUES("Sales Lead", 1, "Sales", 100000), 
      ("Salesperson" 2, "Sales", 80000), 
      ("Lead Engineer", 3, "Engineering", 150000), 
      ("Software Engineer", 4, "Engineering", 120000), 
      ("Account Manager", 5, "Finance", 160000), 
      ("Accountant", 6, "Finance", 125000), 
      ("Legal Team Lead", 7, "Legal", 250000), 
      ("Lawyer", 8, "Legal", 190000);




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
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, null), 
       ("Mike", "Chan", 2, 1), 
       ("Ashley", "Rodriguez", 3, null), 
       ("Kevin", "Tupik", 4, 3), 
       ("Kunal", "Singh", 5, null), 
       ("Malia", "Brown", 6, 5), 
       ("Sarah", "Lourd", 7, null), 
       ("John", "Allen", 8, 7);


