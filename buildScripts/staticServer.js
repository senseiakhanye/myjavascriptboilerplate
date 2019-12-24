const express = require('express');
const chalk = require('chalk');
const path = require('path');
const webpack = require('webpack');
const config = require('../webpack.config.dev');
const webpackMiddleWare = require('webpack-dev-middleware');
const app = express();

const port = process.env.PORT || 3000;
const srcFolder = path.join(__dirname, "../src/");
const compiler = webpack(config);

app.use(webpackMiddleWare(compiler, {
  publicPath: config.output.publicPath
}));

app.use(express.static(srcFolder));

app.listen(port, (err) => {
  if (err != null) {
    return console.log(chalk.red(`Error running port ${port} error message ${err}`));
  }
  console.log(chalk.green(`Listening to port ${port}`));
})
