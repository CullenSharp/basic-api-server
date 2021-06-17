'use strict';

//dependencies
const express = require('express');
const router = express.Router();

//models
const data = require('../models/index')

//routes
router.get('/food', getAll);
router.get('/food/:id', getOne);
router.post('/food', create);
router.put('/food/:id', update);
router.delete('/food/:id', remove);

//callbacks
async function getAll(req, res) {
  const foodItems = await data.food.findAll();

  res.status(200).send(foodItems);
}

async function getOne(req, res) {
  const id = req.params.id;

  const foodItem = await data.food.findOne({
    where: {
      id: id
    }
  })

  res.status(200).send(foodItem);
}

function create(req, res) {
  res.status(200).send('building');
}

function update(req, res) {
  res.status(200).send('building');
}

function remove(req, res) {
  res.status(204);
}

module.exports = router;
