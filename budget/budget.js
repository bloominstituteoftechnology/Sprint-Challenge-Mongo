const mongoose = require('mongoose');


const Budget = new mongoose.Schema({
    title: String,
    budgetAmount: Number
})

// Budget.methods.add = function(name, callback){
//     this.name = name;
//     return this.save(callback);
// }

module.exports = mongoose.model('Budget', Budget);