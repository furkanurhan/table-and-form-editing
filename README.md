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

Vue.js is a suitable choice for a simple CRUD project due to its simplicity, reactivity, and component-based architecture. With Vue.js, developers can quickly grasp the core concepts, easily update and display data with automatic UI synchronization, and create reusable components for efficient code organization. The framework's efficiency, integration capabilities, performance optimizations, and strong community support further contribute to its suitability for building responsive and functional CRUD applications. It is also more compatible with the Vite than the others.

### Getting Started

#### Prerequisites

- Node.js (version >= 14)

### Scripts

1. Choose directory `cd client`
1. Start API with `npm run dev`


