'use strict';

//dependencies
const express = require('express');
const cors = require('cors');

//middlewares
const logger = require('./middlewares/logger');
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500')

//setup
const app = express();

//resource routers
const foodRoutes = require('./routes/food');
const clohtesRoutes = require('./routes/clothes');

app.use(cors());
app.use(express.json());

app.use(logger);

app.use(foodRoutes);
app.use(clohtesRoutes);

//error handling
app.use('*', error404);
app.use(error500);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, console.log(`listening on ${PORT}`) );
  }
}