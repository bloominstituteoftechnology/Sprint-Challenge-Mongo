const mongoose = require('mongoose');

const Category = new mongoose.Schema({
//data here
title: {
        type: String,
        required: true,
        unique: true
        },
    });

//module export
module.exports = mongoose.model('Category', Category, 'categories');