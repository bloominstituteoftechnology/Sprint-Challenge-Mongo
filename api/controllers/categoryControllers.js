const Category = require('../models/category.js');
//const mongoose = require('mongoose');

exports.createCategory = function(req, res) {
    const { title } = req.body; 
    let category = new Category({
        title,
    });
    category.save(function() {
        }).then(function(result) {
            res.status(200).json(result);
            console.log(`category created: ${result}`);
        }).catch(function(err) {
            res.status(500).send(err);
            console.log("An error occurred when creating category.");
        });
};

exports.findAll = function(req, res) {
    // Retrieve and return all categories from the database.
    Category.find()
    .then(function(categories){
        res.status(200).json(categories);
    }).catch(function(error) {
        res.status(500).json({ error: "could not find any categories" });
    });
};