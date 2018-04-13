const mongoose = require('mongoose');

const Budgets = new mongoose.Schema({


module.exports = mongoose.model('Budgets', Budgets);
