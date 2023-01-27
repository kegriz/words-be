const express = require("express");
const mysql = require("mysql2");
const { port, dbHost, dbUser, dbPass, dbDatabase } = require("./config");

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPass,
  database: dbDatabase,
});

app.get("/", (req, res) => {
  res.send(`Hello to ${dbDatabase} db!`);
});

app.get("/words", (req, res) => {
  connection.query("SELECT * FROM `words`", function (err, results, fields) {
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
