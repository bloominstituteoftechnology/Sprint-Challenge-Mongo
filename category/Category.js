const mongoose = require('mongoose')

const Category = mongoose.Schema({
    title: {
        type: String,
        ref: "Expense"
    }
})

modules.exports = mongoose.model('Category', Category, 'categories')