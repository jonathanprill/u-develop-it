const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'WellyisC00l!',
      database: 'election'
    },
    console.log('Connected to the election database.')
);

//Because this file is its own module now, you'll
//need to export it by adding
//the following code at the bottom of the file:
module.exports = db;