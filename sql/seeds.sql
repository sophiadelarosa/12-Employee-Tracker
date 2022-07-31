USE employees_db;

-- departments --
INSERT INTO departments
  (department_name)
VALUES
("Image and Sound"),
("Marketing"),
("Production");
  
-- roles, with salary/dept --
INSERT INTO roles
  (title, salary, departments_id)
VALUES
("Senior Producer",2000,1),
("Producer",1000,1),
("Lead Editor",2000,2),
("Editor",1000,2),
("Assignment Coordinator",1000,3);
  
-- employees --
INSERT INTO employees
  (first_name, last_name, roles_id, manager_id)
VALUES
("Sophia","De La Rosa",1,NULL),
("Wendy","Brown",2,1),
("Alejandro","Valdez",2,1),
("Bianca","Sheperd",3,NULL),
("David","Harris",4,4);
