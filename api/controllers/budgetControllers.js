const mongoose = require('mongoose');
const Budget = require('../models/budget');

const createBudget = (newBudget) => {

  return new Budget(newBudget).save();

};

module.exports = {
  createBudget
};