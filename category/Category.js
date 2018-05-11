const mongoose = require('mongoose')

const Category = mongoose.Schema({
    title: {
        type: String,
        ref: "Expense"
    }
})

module.exports = mongoose.model('Category', Category, 'categories')