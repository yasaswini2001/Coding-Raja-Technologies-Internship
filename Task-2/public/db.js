const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yasaswini7674@",
  database: "codingraja",
});
connection.connect((err) => {
  if (err) {
    console.log("connection fails");
  } else {
    console.log("Successfully connected to database");
  }
});
module.exports = connection;
