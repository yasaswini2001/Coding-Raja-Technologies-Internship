// server.js

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;
const cors=require('cors');
app.use(cors())
// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yasaswini7674@',
  database: 'ushayasaswini'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle user registration
app.post('/register', (req, res) => {
  const { first_name, last_name, username, email, password } = req.body;

  // Check if user already exists
  connection.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email], (error, results) => {
    if (error) {
      console.error('Error checking user:', error);
      res.status(500).json({ error: 'Error checking user' });
      return;
    }

    if (results.length > 0) {
      res.status(400).json({ error: 'User already exists' });
      return;
    }

    // If user does not exist, insert into the database
    const user = {
      first_name,
      last_name,
      username,
      email,
      password
    };

    connection.query('INSERT INTO users SET ?', user, (insertError, insertResults) => {
      if (insertError) {
        console.error('Error registering user: ', insertError);
        res.status(500).json({ error: 'Error registering user' });
        return;
      }
      console.log('User registered successfully');
      res.status(200).json({ message: 'User registered successfully' });
    });
  });
});
app.post('/login', (req, res) => {
    const { usernameOrEmail, password } = req.body;
  
    // Check if the user exists in the database
    connection.query('SELECT * FROM users WHERE username = ? OR email = ?', [usernameOrEmail, usernameOrEmail], (error, results) => {
      if (error) {
        console.error('Error fetching user: ', error);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
  
      if (results.length === 0) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
  
      const user = results[0];
  
      // Check if the password matches
      if (user.password !== password) {
        res.status(401).json({ error: 'Incorrect password' });
        return;
      }
  
      // Login successful
      res.status(200).json({ message: 'Login successful', user });
    });
  });
  
  // Route to check password for a given username or email
  app.post('/check-password', (req, res) => {
    const { usernameOrEmail, password } = req.body;
  
    // Check if the user exists in the database
    connection.query('SELECT * FROM users WHERE username = ? OR email = ?', [usernameOrEmail, usernameOrEmail], (error, results) => {
      if (error) {
        console.error('Error fetching user: ', error);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
  
      if (results.length === 0) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
  
      const user = results[0];
  
      // Check if the password matches
      if (user.password !== password) {
        res.status(401).json({ error: 'Incorrect password' });
        return;
      }
  
      // Password matches
      res.status(200).json({ message: 'Password matches', user });
    });
  });
  app.post('/posts', (req, res) => {
    const { title, description, imageUrl, category } = req.body;
    const query = 'INSERT INTO posts (title, description, imageUrl, category) VALUES (?, ?, ?, ?)';
    connection.query(query, [title, description, imageUrl, category], (err, results) => {
      if (err) {
        console.error('Error inserting post into database:', err);
        return res.status(500).json({ error: 'Failed to insert post into database' });
      }
      console.log('Post inserted into database');
      return res.status(200).json({ message: 'Post submitted successfully' });
    });
  });
  app.get('/posts/art', (req, res) => {
    const query = 'SELECT * FROM posts WHERE category = ?';
    connection.query(query, ['art'], (err, results) => {
      if (err) {
        console.error('Error fetching art posts:', err);
        res.status(500).json({ error: 'Failed to fetch art posts' });
        return;
      }
      res.status(200).json(results);
    });
  });
  app.get('/posts/technology', (req, res) => {
    const query = 'SELECT * FROM posts WHERE category = ?';
    connection.query(query, ['technology'], (err, results) => {
      if (err) {
        console.error('Error fetching technology posts:', err);
        res.status(500).json({ error: 'Failed to fetch technology posts' });
        return;
      }
      res.status(200).json(results);
    });
  });
  app.get('/posts/science', (req, res) => {
    const query = 'SELECT * FROM posts WHERE category = ?';
    connection.query(query, ['science'], (err, results) => {
      if (err) {
        console.error('Error fetching science posts:', err);
        res.status(500).json({ error: 'Failed to fetch science posts' });
        return;
      }
      res.status(200).json(results);
    });
  });
  app.get('/posts/cinema', (req, res) => {
    const query = 'SELECT title, description, imageUrl FROM posts WHERE category = ?';
    connection.query(query, ['cinema'], (err, results) => {
      if (err) {
        console.error('Error fetching cinema posts:', err);
        res.status(500).json({ error: 'Failed to fetch cinema posts' });
        return;
      }
      res.status(200).json(results);
    });
 });
 
 
  app.get('/posts/food', (req, res) => {
    const query = 'SELECT * FROM posts WHERE category = ?';
    connection.query(query, ['food'], (err, results) => {
      if (err) {
        console.error('Error fetching food posts:', err);
        res.status(500).json({ error: 'Failed to fetch food posts' });
        return;
      }
      res.status(200).json(results);
    });
  });
  app.get('/posts/design', (req, res) => {
    const query = 'SELECT * FROM posts WHERE category = ?';
    connection.query(query, ['design'], (err, results) => {
      if (err) {
        console.error('Error fetching design posts:', err);
        res.status(500).json({ error: 'Failed to fetch design posts' });
        return;
      }
      res.status(200).json(results);
    });
  });
  app.post("/username",(req,res)=>{
    const { usernameOrEmail } = req.body;
    console.log(usernameOrEmail);
  })
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
