# All about Express

June 15, 2021

## Shredder

```JS
  'use strict';
  $$.map = (items, callback) => {
    // take an array/object [1,2,3,4 ... n] {foo: bar}
    // iterate over each item with callback
    // return a new array

    const res = [];
    let index = 0;

    if(typeof items === 'object') {
      for(const [key, value] of Object.entries(items)) {
        res[index] = callback(value, index);
        index ++;
      }
      return res;
    } 

    for(const item of items) {
      res[index] = (callback(item, index));
      index ++;
    }
    
    return res
}
```

## Express

### Routing

**How does express know which middleware to use?**

Routes are defined in Express with a path and a callback:

```JS
const express = require('express');
const app = express();

app.get('/foo', (req, res) => {
  res.send('bar');
})
```

There's also .post, .put, .delete, and etc.. But now a GET request to '/' has been defined; it can use that handler, and we should get back 'bang' when we do. If we called .post to the same route, well it would shoot back an error. The POST request route has not been defined

### Middleware

Middlewares are used for moving, modifying and checking requests (i.e. what comes down the pipe). Most of the time they look like this: 

```JS
module.exports = (req, res, next) => {
  // do something
  // go to the next thing
  next();
}
```

You can also pass an error handler to next() by passing it a message.

```JS
module.exports = (error, req, res, next) => {
  // do something
}
```

Calling them in the server code will look like this:

```JS
  // app.METHOD('/route', MIDDLEWARE, CALLBACK);
  app.get('/', getUser, (req,res) => {
    user = req.body;
    res.send(user);
  })
```

Or this:

```JS
//app.use(MIDDLEWARE)
app.use(authorization);
```

### Coverage

We use jest to test our code before incorporating it into the production branch of our code. The value of this is that we can make sure that the code isn't doing something really wacky that will break things. We set the paramaters for what makes the code production ready; once those checks pass, the code is, in a sense, vetted for production.

#### Here's some keywords

* jest.fn()

  * this is a mock function

* toEqual('some Data')

  * checks to see if the output of a function or test is *equal* to some other value

* expect()

  * Tells the test where to look

* test('message', callback)

  * defines a test within the suite

* describe('message', callback)

  * describes a test suite
