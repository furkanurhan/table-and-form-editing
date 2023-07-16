const express = require('express');

const router = express.Router();
const carController = require('../controllers/car')

// Create a new car
router.post('/', carController.createCar);

// Get all cars
router.get('/', carController.getAllCars);

// Get a car by its ID
router.get('/:id', carController.getCarById);

// Update a car by its ID
router.put('/:id', carController.updateCarById);

module.exports = router;