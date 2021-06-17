'use strict';

//dependencies
const express = require('express');

//middlewares
const logger = require('./middlewares/logger');

//setup
const app = express();

//routes
const food = require('./routes/food')

app.use(logger);
app.use(food);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, console.log(`listening on ${PORT}`) );
  }
}