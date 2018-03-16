const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


const Category = new mongoose.Schema({
  _id: '543d2c72gsb23cd657438921',
  title: 'Groceries',
key: { type: Number, unique: true } 
});

module.exports = mongoose.model('Category', Category);
/*
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Starship = new mongoose.Schema({
  pilot_keys: [Number],
  mglt: String,
  starship_class: String,
  hyperdrive_rating: String,
  key: { type: Number, unique: true },
  // add pilots field to lik the ship to the characters model
});

module.exports = mongoose.model('Starship', Starship);
*/