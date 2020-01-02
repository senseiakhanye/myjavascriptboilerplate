const express = require('express');
const chalk = require('chalk');
const path = require('path');
const webpack = require('webpack');
const config = require('../webpack.config.dev');
const webpackMiddleWare = require('webpack-dev-middleware');
const app = express();
const fs = require('fs');

const port = process.env.PORT || 3000;
const srcFolder = path.join(__dirname, "../src/");
const compiler = webpack(config);

app.use(webpackMiddleWare(compiler, {
  publicPath: config.output.publicPath
}));

app.get('/users', (req, res) => {
  const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, "../src/api/db.json")).toString());
  res.json(jsonData.users);
});

app.use(express.static(srcFolder));

app.listen(port, (err) => {
  if (err != null) {
    return console.log(chalk.red(`Error running port ${port} error message ${err}`)); // eslint-disable-line no-console
  }
  console.log(chalk.green(`Listening on port ${port}`)); // eslint-disable-line no-console
})
