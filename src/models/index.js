'use strict';

//environment variables
require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const NODE_ENV = process.env.NODE_ENV;

//dependencies
const {Sequelize, DataTypes} = require('sequelize');
const foodModel = require('./food');

let sequelize = new Sequelize(DATABASE_URL, NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
} : {})

const food = foodModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food: food,
}
