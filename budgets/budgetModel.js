const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema ({

})

const budgetModel = mongoose.model('Budget', budgetSchema);

module.exports = budgetModel;