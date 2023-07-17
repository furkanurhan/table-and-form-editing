# Overview

This is a simple project built with Node.js, Vue and MongoDB. It provides CRUD operations for managing cars data.

* Api
* Client

## API

Developed by Node.js, MongoDB and also mongoose for lightweight database management. 

### Getting Started

#### Prerequisites

- Node.js (version >= 14)
- MongoDB (running locally or accessible remotely)

#### EndPoints

* /cars (GET) -> Get All Cars
* /cars (POST) -> Create a new car
* /cars/:id (GET) -> Get a car by its ID
* /cars/:id (PUT) -> Update a car by its ID


### Scripts

1. Choose directory `cd api`
1. Start API with `npm start`

### Environments

* PORT=3000
* DB_CONNECTION=<mongodb-connection-string>

## CLIENT

Developed by Vue.js. 

### Getting Started

#### Prerequisites

- Node.js (version >= 14)

### Scripts

1. Choose directory `cd client`
1. Start API with `npm run dev`


