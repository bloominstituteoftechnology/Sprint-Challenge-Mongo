const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({

});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;