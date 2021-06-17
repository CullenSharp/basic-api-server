'use strict';

//dependencies
const express = require('express');
const router = express.Router();

//models
const data = require('../models/index');

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
  });

  res.status(200).send(foodItem);
}

async function create(req, res) {
  const foodData = req.body;
  
  const foodItem = await data.food.create(foodData);
  res.status(200).send(foodItem);
}

async function update(req, res) {
  const id = req.params.id;
  const foodData = req.body;

  const foodItem = await data.food.findOne({
    where: {
      id: id
    }
  });

  await foodItem.update(foodData);

  res.status(200).send(foodItem);
}

async function remove(req, res) {
  const id = req.params.id;

  await data.food.destroy({ where: { id: id }});


  res.status(204);
}

module.exports = router;
