const mongoose = require('mongoose')

const Category = mongoose.Schema({
    title: { type: String }
})

module.exports = mongoose.model('Category', Category)