'use strict';

//dependencies
const express = require('express');
const cors = require('cors');

//middlewares
const logger = require('./middlewares/logger');

//setup
const app = express();

//routes
const foodRoutes = require('./routes/food');
const clohtesRoutes = require('./routes/clothes');

app.use(cors());
app.use(express.json());

app.use(logger);

app.use(foodRoutes);
app.use(clohtesRoutes);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, console.log(`listening on ${PORT}`) );
  }
}