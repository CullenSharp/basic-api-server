'use strict';

//dependencies
const express = require('express');
const router = express.Router();

//models
const data = require('../models/index');

//routes
router.get('/clothes', getAll);
router.get('/clothes/:id', getOne);
router.post('/clothes', create);
router.put('/clothes/:id', update);
router.delete('/clothes/:id', remove);

//callbacks
async function getAll(req, res) {
  const clothesItems = await data.clothes.findAll();

  res.status(200).send(clothesItems);
}

async function getOne(req, res) {
  const id = req.params.id;

  const clothesItems = await data.clothes.findOne({
    where: {
      id: id
    }
  });

  res.status(200).send(clothesItems);
}

async function create(req, res) {
  const clothesData = req.body;
  
  const clothesItems = await data.clothes.create(clothesData);
  res.status(200).send(clothesItems);
}

async function update(req, res) {
  const id = req.params.id;
  const clothesData = req.body;

  const clothesItems = await data.clothes.findOne({
    where: {
      id: id
    }
  });

  await clothesItems.update(clothesData);

  res.status(200).send(clothesItems);
}

async function remove(req, res) {
  const id = req.params.id;

  await data.clothes.destroy({ where: { id: id }});

  res.status(204);
}

module.exports = router;
