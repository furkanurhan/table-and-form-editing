const express = require('express');
const db = require('./db/index');
const carsRoutes = require('./routes/cars');

require('dotenv/config');

const app = express();

// Middlewares
app.use(express.json());

// Configuration
const port = process.env.PORT || 3000;

// Routes
app.use('/cars', carsRoutes)

// DB Connection
db.initialize();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});