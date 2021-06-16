'use strict';

//dependencies
require('dotenv').config();
const express = require('express');

//middlewares

//setup
const app = express();
const PORT = process.env.PORT || 3001;

module.exports = {
  app,
  start: app.listen(PORT, console.log(`listening on ${PORT}`));
}