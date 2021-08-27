USEemployees_db 

INSERT INTO department(department_name)
VALUES("Engineering"), 
      ("Sales"), 
      ("Finance"), 
      ("Legal"), 
      ("Marketing");


INSERT INTO role(title, role_id, department, salary)
VALUES("Sales Lead", 1, "Sales", 100000), 
      ("Salesperson" 2, "Sales", 80000), 
      ("Lead Engineer", 3, "Engineering", 150000), 
      ("Software Engineer", 4, "Engineering", 120000), 
      ("Account Manager", 5, "Finance", 160000), 
      ("Accountant", 6, "Finance", 125000), 
      ("Legal Team Lead", 7, "Legal", 250000), 
      ("Lawyer", 8, "Legal", 190000);




INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, null), 
       ("Mike", "Chan", 2, 1), 
       ("Ashley", "Rodriguez", 3, null), 
       ("Kevin", "Tupik", 4, 3), 
       ("Kunal", "Singh", 5, null), 
       ("Malia", "Brown", 6, 5), 
       ("Sarah", "Lourd", 7, null), 
       ("John", "Allen", 8, 7);


