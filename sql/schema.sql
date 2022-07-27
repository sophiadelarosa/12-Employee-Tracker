DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

-- Create employee table --
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NULL,
  last_name VARCHAR(45) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

-- Create role table --
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(10.3) NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

-- Create department table --
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL
);

-- BONUS: * Update employee managers. 
-- View employees by manager.
-- View employees by department.
-- Delete departments, roles, and employees.
-- View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.