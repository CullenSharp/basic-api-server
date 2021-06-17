# Basic REST API

June 16, 2021

## Description

This is a basic REST API made using Express. Testing with Jest and Supertest. Mocking with Sqlite and Sequelizer.

## Start up

Clone the repo from github, and install the necessary dependencies.

```BASH
npm i
npm start
```

## UML

![CRUD API](UML.png)

## Routes

### /food

#### GET

* Status code: 200
* JSON response:
  * Returns and array of `Food` items
  * Name: STRING
  * Calories: INTEGER

#### POST

* Status code: 200
* JSON response:
  * Returns a newly created `Food` item
  * Name: STRING
  * Calories: INTEGER

### /food/:id

#### GET

* Status code: 200
* JSON response:
  * Returns a single `Food` item based on the id
  * Name: STRING
  * Calories: INTEGER

#### PUT

* Status code: 200
* JSON response:
  * Returns the modified `Food` item based on the id
  * Name: STRING
  * Calories: INTEGER

#### DELETE

* Status code: 204
* Removes a single `Food` item based on the id, *no body*

----

### /clothes

#### GET

* Status code: 200
* JSON response:
  * Returns and array of `Clothes` items
  * Name: STRING
  * Material: STRING

#### POST

* Status code: 200
* JSON response:
  * Returns a newly created `Clothes` item
  * Name: STRING
  * Material: STRING

### /food/:id

#### GET

* Status code: 200
* JSON response:
  * Returns a single `Clothes` item based on the id
  * Name: STRING
  * Material: STRING

#### PUT

* Status code: 200
* JSON response:
  * Returns the modified `Clothes` item based on the id
  * Name: STRING
  * Material: STRING

#### DELETE

* Status code: 204
* Removes a single `Clothes` item based on the id, *no body*
