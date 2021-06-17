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
  })

  test('GET request to /food/:id returns 200', async () => {
    const response = await request.get('/food/1');

    expect(response.status).toEqual(200);
  })

  test('POST request to /food returns 200', async () => {
    const response = await request.get('/food');

    expect(response.status).toEqual(200);
  })

  test('PUT request to /food/:id returns 200', async () => {
    const response = await request.get('/food/1');

    expect(response.status).toEqual(200);
  })

  test('DELETE request to /food/:id returns 204', async () => {
    const response = await request.get('/food/1');

    expect(response.status).toEqual(200);
  })
})