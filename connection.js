//Connect to database
const mysql = require('mysql2')
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
module.exports =db  