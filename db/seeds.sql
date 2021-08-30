INSERT INTO department (department_name)
VALUES ("Engineering"), 
       ("Sales"), 
       ("Finance"), 
       ("Legal");
INSERT INTO role (role_title, id, department_id, salary)
VALUES ("Sales Lead", 1, 1, 100000),
       ("Salesperson", 2, 1, 80000), 
       ("Lead Engineer", 3, 2, 150000), 
       ("Software Engineer", 4, 2, 120000), 
       ("Account Manager", 5, 3, 160000), 
       ("Accountant", 6, 3, 125000),
       ("Legal Team Lead", 7, 4, 250000),
       ("Lawyer", 8, 4, 190000);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, null), 
       ("Mike", "Chan", 2, 1), 
       ("Ashley", "Rodriguez", 3, null), 
       ("Kevin", "Tupik", 4, 3), 
       ("Kunal", "Singh", 5, null), 
       ("Malia", "Brown", 6, 5), 
       ("Sarah", "Lourd", 7, null), 
       ("Jeff", "Allen", 8, 7);


