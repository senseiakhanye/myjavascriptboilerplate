const express = require('express');
const chalk = require('chalk');
const path = require('path');
const app = express();
const fs = require('fs');
const compression = require('compression');

const port = process.env.PORT || 3000;
const srcFolder = path.join(__dirname, "../dist/");



app.get('/users', (req, res) => {
  const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, "../src/api/db.json")).toString());
  res.json(jsonData)
});

app.use(compression());
app.use(express.static(srcFolder));

app.listen(port, (err) => {
  if (err != null) {
    return console.log(chalk.red(`Error running port ${port} error message ${err}`)); // eslint-disable-line no-console
  }
  console.log(chalk.green(`Listening on port ${port}`)); // eslint-disable-line no-console
})
