DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

-- Create department table --
CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

-- Create role table --
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NULL,
  departments_id INT NOT NULL,
  CONSTRAINT fk_department FOREIGN KEY (departments_id) REFERENCES departments(id) ON DELETE CASCADE
);

-- Create employee table --
CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  roles_id INT NOT NULL,
  CONSTRAINT fk_role FOREIGN KEY (roles_id) REFERENCES roles(id) ON DELETE CASCADE,
  manager_id INT NULL,
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE CASCADE
);

-- BONUS: * Update employee managers. 
-- View employees by manager.
-- View employees by department.
-- Delete departments, roles, and employees.
-- View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.