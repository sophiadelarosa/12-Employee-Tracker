//dependencies
const mysql = require("mysql12");
const inquirer = require("inquirer");
require("console.table"); //?? what does this mean

//Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      //put port: 3306 
      user: 'root',
      //change this at the end!
      password: 'DLRnews101**',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );

//first prompt for different actions
//view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

//*at the end of each function, run first prompt again*
//function to view employees

//function to view roles

//function to view departments

//function to add an employee

//function to add a role

//function to update employee role (select employee, replace role)

//function to add a department