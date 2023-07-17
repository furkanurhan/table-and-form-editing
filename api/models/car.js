const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
  ID: { type: Number, required: true },
  CARID: { type: String, required: true },
  INSTOCK: { type: Boolean, required: true },
  HORSEPOWER: { type: Number, min: 100, max: 550, required: true },
  PRICE: { type: Number, required: true },
  CURRENCY: { type: String, required: true },
  COLOR: { type: String, required: true }
});

module.exports = mongoose.model('Car', carSchema);