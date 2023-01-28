const express = require("express");
const { port, dbDatabase } = require("./config");
const words = require('./routes/words')

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hello to ${dbDatabase} db!`);
});

app.use('/words', words)

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
