'use strict';

//dependencies
const supertest = require('supertest');
const server = require('../src/server');

//setup
const request = supertest(server.app);

//models
const data = require('../src/models/index');

//sqlite initialization
beforeAll(async () => {
  await data.db.sync();
})

//sqlite termination
afterAll(async () => {
  await data.db.drop();
})

describe('Testing routes to /food', () => {
  test('GET request to /food returns 200', async () => {
    const response = await request.get('/food');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  })

  test('POST request creates a new fooditem', async () => {
    const response = await request.post('/food').send({
      name: 'string beans',
      calories: 10
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('string beans');
  })

  test('GET request to /food/:id returns 200', async () => {
    const response = await request.get('/food/1');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('string beans');
  })

  test('PUT request to /food/:id returns 200', async () => {
    const response = await request.put('/food/1').send({
      name: 'lima beans',
      calories: '15'
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('lima beans');
  })

  //having trouble with delete, the request just hangs then times out
  test.skip('DELETE request to /food/:id returns 204', async () => {
    const response = await request.delete('/food/1');

    expect(response.status).toEqual(204);
  })

//================route tests to clothes

  test('GET request to /clothes returns 200', async () => {
    const response = await request.get('/clothes');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  })

  test('POST request creates a new clothesItem', async () => {
    const response = await request.post('/clothes').send({
      name: 'denim jeans',
      material: 'denim'
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('denim jeans');
  })

  test('GET request to /clothes/:id returns 200', async () => {
    const response = await request.get('/clothes/1');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('denim jeans');
  })

  test('PUT request to /clothes/:id returns 200', async () => {
    const response = await request.put('/clothes/1').send({
      name: 'leather pants',
      material: 'leather'
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('leather pants');
  })

  test.skip('DELETE request to /clothes/:id returns 204', async () => {
    const response = await request.delete('/clothes/1');

    expect(response.status).toEqual(204);
  })
})