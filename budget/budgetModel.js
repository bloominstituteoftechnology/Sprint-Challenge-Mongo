const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true,
    
    },
    budgetAmount: {
        type: Number,
        required: true,
        unique: true,
    }



});

const options = {
    timestamps: true,
};


const budgetModel = mongoose.model('Budget', budgetSchema, 'budget');

module.exports = budgetModel;