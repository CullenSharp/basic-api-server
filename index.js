'use strict';

//dependencies
require('dotenv').config();

//setup
const server = require('src/server.js');
const PORT = process.env.PORT || 3001;

server.start(PORT);
