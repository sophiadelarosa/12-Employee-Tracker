//dependencies
//const mysql = require("mysql2");
const inquirer = require("inquirer");
//const Connection = require("mysql2/typings/mysql/lib/Connection");
require("console.table"); 
const db= require('./connection')

//first prompt for different actions
const firstPrompt = () =>
{
    return inquirer.prompt ([
        {
            message: 'What would you like to do?',
            type: 'list',
            name: 'action',
            choices: ['View employees', 'View roles', 'View departments', 'Add an employee', 'Add a role', 'Add a department', 'Update an employee role']
        },
    ])

    .then(function (task) {
        switch (task.action) {
            case 'View employees':
            viewEmployees();
            break;

            case "View roles":
            viewRoles();
            break;

            case "View departments":
            viewDept();
            break;

            case "Add an employee":
            addEmployee();
            break;

            case "Add a role":
            addRole();
            break;

            case "Add a department":
            addDept();
            break;

            case "Update an employee role":
            updateEmpRole();
            break;
        }
    });
}

firstPrompt();


//function to view employees
function viewEmployees() 
{
    console.log("Viewing employees:");
    
    var query =
    `SELECT first_name, last_name from employees;`;

    db.query(query, function (err, res) {
        if (err) throw err;
    
        console.table(res);
        console.log();
        firstPrompt();
    });
    
};

//function to view roles
function viewRoles() 
{
    console.log("Viewing roles:");

    var query = 
    `SELECT title from roles;`;

    db.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);
        console.log();
        firstPrompt();
    });
};

//function to view departments
function viewDept() 
{
    console.log("Viewing departments:");

    var query =
    `SELECT department_name from departments;`;

    db.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);
        console.log();
        firstPrompt();
    });
};

//function to add an employee
const addEmployee = () =>
{
    return inquirer.prompt ([
        {
            message: "Please enter the new employee's first name.",
            type: 'input',
            name: 'first_name'
        },
        {
            message: "Please enter the new employee's last name.",
            type: 'input',
            name: 'last_name'
        },
        {
            message: "Please enter the new employee's role.",
            type: 'input',
            name: 'roles_id'
        },
        {
            message: "Please enter their manager's ID.",
            type: 'input',
            name: 'manager_id'
        }
    ])

    .then(newEmployeeData =>
    {
        let { first_name, last_name, roles_id, manager_id } = newEmployeeData;
        console.log(newEmployeeData);

        var query = 
        `INSERT INTO employees (first_name, last_name, roles_id, manager_id) VALUES (newEmployeeData)`;

        console.log(`New employee has been added!`);
        firstPrompt();
    }); 
};

//function to add a role
function addRole() {

};

//function to add a department
function addDept() {

};

//function to update employee role (select employee, replace role)
function updateEmpRole() {

};

//select * from employees LEFT JOIN roles on employees.roles_id = roles.id LEFT JOIN departments on roles.departments_id = departments.id;