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
  connection.query("SELECT * FROM words;", function (err, result) {
    res.json(result);
  });
});

app.get("/words/:id", (req, res) => {
  const id = parseInt(req.params.id);
  connection.execute("SELECT * FROM words WHERE id = ?;", [id], function (err, result) {
    res.json(result);
  });
});

app.post("/words", (req, res) => {
  const { pl, en } = req.body;
  connection.execute("INSERT INTO words (pl, en) VALUES (?, ?);", [pl, en], function (err, result) {
    res.json(result);
  });
});

app.put("/words/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { pl, en } = req.body;
  connection.execute(`UPDATE words SET pl = ?, en = ? WHERE id = ?;`, [pl, en, id], (err, result) => {
    res.json(result);
  });
});

app.delete("/words/:id", (req, res) => {
  const id = parseInt(req.params.id);
  connection.execute("DELETE FROM words WHERE id = ?;", [id], function (err, result) {
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
