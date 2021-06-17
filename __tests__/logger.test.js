'use strict';

//imports
const logger = require('../src/middlewares/logger');

describe('Testing logger middleware functionality', () => {
  test('Successfully logs request method and path', () => {
    const request = {
      method: 'GET',
      path: '/path'
    }

    const response = {};
    const nextFn = jest.fn();
    console.log = jest.fn();

    logger(request, response, nextFn);
    expect(nextFn).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('GET', '/path');
  })
})