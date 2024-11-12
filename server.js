require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();

const jwt = require('jsonwebtoken');

// Middleware to parse incoming JSON requests
app.use(express.json()); // This is required to parse the request body

const posts = [
  {
    username: 'dven',
    title: 'IT'
  }, 
  {
    username: 'kiven',
    title: 'Deym'
  },
  {
    username: 'wut',
    title: 'gay'
  }
]
 
app.get('/posts', (req, res) => {
  res.json(posts)
})


app.post('/login', (req, res) => {
// Authenticate User 

const username = req.body.username
const user = { name: username }

const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
res.json({ accessToken: accessToken })
})

app.listen(3000)


// Create a connection to the MySQL database
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT
// });

// // Connect to the MySQL server
// connection.connect((err) => {
//   if (err) {
//     console.error('error connecting to the database:', err.stack);
//     return;
//   }
//   console.log('connected to MySQL as id ' + connection.threadId);
// });

// Example query: Get all rows from a table
// const query = 'SELECT * FROM it_assets';  // Replace with your actual table name

// connection.query(query, (err, results, fields) => {
//   if (err) {
//     console.error('Error executing query:', err);
//   } else {
//     console.log('Query results:', results);
//   }
// });

// // Close the connection
// connection.end();
