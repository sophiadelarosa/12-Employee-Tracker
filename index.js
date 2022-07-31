//dependencies
//const mysql = require("mysql2");
const inquirer = require("inquirer");
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
            choices: ['View employees', 'View roles', 'View departments', 'Add an employee', 'Add a role', 'Add a department']
            //'Update an employee role'
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

            //case "Update an employee role":
            //updateEmpRole();
            //break;
        }
    });
}

firstPrompt();


//function to view employees
function viewEmployees() 
{
    console.log("Viewing employees:");
    
    var query =
    `SELECT id, first_name, last_name, roles_id, manager_id from employees;`;

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
    `SELECT id, title, salary, departments_id from roles;`;

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
    `SELECT department_name, id from departments;`;

    db.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);
        console.log();
        firstPrompt();
    });
};

//function to add an employee
function addEmployee()
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
            message: "Please enter the new employee's role ID number.",
            type: 'input',
            name: 'roles_id'
        },
        {
            message: "Please enter their manager's ID number.",
            type: 'input',
            name: 'manager_id'
        }
    ])

    .then(function (answer) 
    {
        console.log(answer);

        var query = `INSERT INTO employees SET ?`

        db.query(query,
            {
                first_name: answer.first_name,
                last_name: answer.last_name,
                roles_id: answer.roles_id,
                manager_id: answer.manager_id,
            },
            function (err, res) {
                if (err) throw err;

                console.table(res);
                console.log("New employee added!");

                firstPrompt();
            }
        );
    });

    //.then(newEmployeeData =>
    //{
        //let newEmployee = (answer.first_name, answer.last_name, answer.roles_id, answer.manager_id);
        //console.log(newEmployee);
        //const employee = new Employee(newEmployeeData.first_name, newEmployeeData.last_name, newEmployeeData.roles_id, newEmployeeData.manager_id);
        //console.log(newEmployeeData);

        //var query = 
        //`INSERT INTO employees (first_name, last_name, roles_id, manager_id) VALUES (${employee})`;

        //db.query('`INSERT INTO employee SET ?', employee,
        //(err, result) => {
            //if (err) {
                //console.log(err);
            //} 
            //console.log(result);
        //});

        //console.log(`New employee has been added!`);
        //firstPrompt();
    //}); 
};

//function to add a role
function addRole() 
{
    return inquirer.prompt ([
        {
            message: "Please enter role ID number.",
            type: 'input',
            name: 'id'
        },
        {
            message: "Please enter role title.",
            type: 'input',
            name: 'title'
        },
        {
            message: "Please enter role salary.",
            type: 'input',
            name: 'salary'
        },
        {
            message: "Please enter role department ID number.",
            type: 'input',
            name: 'departments_id'
        }
    ])

    .then(function (answer) 
    {
        console.log(answer);

        var query = `INSERT INTO roles SET ?`

        db.query(query,
            {
                id: answer.id,
                title: answer.title,
                salary: answer.salary,
                departments_id: answer.departments_id
            },
            function (err, res) 
            {
                if (err) throw err;

                console.table(res);
                console.log("New role added!");

                firstPrompt();
            }
        );
    });
};

//function to add a department
function addDept() 
{
    return inquirer.prompt ([
        {
            message: "Please enter department ID number.",
            type: 'input',
            name: 'id'
        },
        {
            message: "Please enter department name.",
            type: 'input',
            name: 'department_name'
        }
    ])

    .then(function (answer) 
    {
        console.log(answer);

        var query = `INSERT INTO departments SET ?`

        db.query(query,
            {
                id: answer.id,
                department_name: answer.department_name
            },
            function (err, res) 
            {
                if (err) throw err;

                console.table(res);
                console.log("New department added!");

                firstPrompt();
            }
        );
    });
};

//function to update employee role (select employee, replace role)
//function updateEmpRole() 
//{
    //return inquirer.prompt ([
        //{
            //message: 
        //},
    //])
//};

//select * from employees LEFT JOIN roles on employees.roles_id = roles.id LEFT JOIN departments on roles.departments_id = departments.id;