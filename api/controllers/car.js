const Car = require('../models/car');
const Joi = require('joi');

const carValidationSchema = Joi.object({
  ID: Joi.number().required(),
  CARID: Joi.string().required(),
  INSTOCK: Joi.boolean().required(),
  HORSEPOWER: Joi.number().integer().min(100).max(550).required(),
  PRICE: Joi.number().required(),
  CURRENCY: Joi.string().required(),
  COLOR: Joi.string().required()
});

const createCar = (req, res) => {
  const newCar = req.body;
  const { error } = carValidationSchema.validate(newCar);
  if (error) {
    res.status(400).json({ error: error.details[0].message });
    return;
  }

  Car.create(newCar)
    .then(() => {
      res.json({ message: 'Car created successfully.' });
    })
    .catch((err) => {
      console.error('Failed to create car:', err);
      res.status(500).json({ error: 'Failed to create car.' });
    });
};

const getAllCars = (req, res) => {
  Car.find()
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      console.error('Failed to fetch cars:', err);
      res.status(500).json({ error: 'Failed to fetch cars.' });
    });
};

const getCarById = (req, res) => {
  const { id } = req.params;

  Car.findOne({ ID: id })
    .then((car) => {
      if (!car) {
        res.status(404).json({ error: 'Car not found.' });
        return;
      }
      res.json(car);
    })
    .catch((err) => {
      console.error('Failed to fetch car:', err);
      res.status(500).json({ error: 'Failed to fetch car.' });
    });
};

const updateCarById = async (req, res) => {
  const { id } = req.params;

  const { ID, CARID, ...updatedCar } = req.body;

  const { error } = carValidationSchema.validate(req.body);
  if (error) {
    res.status(400).json({ error: error.details[0].message });
    return;
  }

  try {
    const result = await Car.updateOne({ ID: id }, updatedCar);
    if (result.n === 0) {
      res.status(404).json({ error: 'Car not found.' });
      return;
    }
    res.json({ message: 'Car updated successfully.' });
  } catch (err) {
    console.error('Failed to update car:', err);
    res.status(500).json({ error: 'Failed to update car.' });
  }
};


module.exports = {
  createCar,
  getAllCars,
  getCarById,
  updateCarById
};
