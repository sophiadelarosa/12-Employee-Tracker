-- pre-populate your database to make development of individual features easier --
USE employees_db;

-- departments --
INSERT INTO departments
  (department_name)
VALUES
("Sales"),
("IT"),
("Adm");
  
-- roles, with salary/dept --
INSERT INTO roles
  (title, salary, departments_id)
VALUES
("sales manager",2000,1),
("sales rep",1000,1),
("head engineer",2000,2),
("engineer",1000,2),
("accountant",1000,3);
  
-- employees --
INSERT INTO employees
  (first_name, last_name, roles_id, manager_id)
VALUES
("Amy","Leader",1,NULL),
("Emily","Brown",2,1),
("Julie","Can",2,1),
("David","Sheperd",3,NULL),
("Bob","Harris",4,4);
