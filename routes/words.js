const express = require("express");
const mysql = require("mysql2");
const { dbHost, dbUser, dbPass, dbDatabase } = require("../config");
const router = express.Router();

const connection = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPass,
  database: dbDatabase,
});

router.get("/", (req, res) => {
  connection.query("SELECT * FROM words;", function (err, result) {
    res.json(result);
  });
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  connection.execute("SELECT * FROM words WHERE id = ?;", [id], function (err, result) {
    res.json(result);
  });
});

router.post("/", (req, res) => {
  const { pl, en } = req.body;
  connection.execute("INSERT INTO words (pl, en) VALUES (?, ?);", [pl, en], function (err, result) {
    res.json(result);
  });
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { pl, en } = req.body;
  connection.execute(`UPDATE words SET pl = ?, en = ? WHERE id = ?;`, [pl, en, id], (err, result) => {
    res.json(result);
  });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  connection.execute("DELETE FROM words WHERE id = ?;", [id], function (err, result) {
    res.json(result);
  });
});

module.exports = router;
