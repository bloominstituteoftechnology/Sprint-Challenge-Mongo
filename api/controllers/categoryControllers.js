const category = require('../models/category.js');

exports.findAll = function(req, res) {
    // Retrieve and return all categories from the database.
    Category.find({title})
    .then(function(categories){
        res.status(200).json(categories);
    }).catch(function(error) {
        res.status(500).json({ error: "could not find any categories"});
    });
};


exports.create = function(req, res) {
    if(!req.body.title) {
        res.status(400).send({message: "title can not be empty"});
    }
    category = new Category({
        title: req.body.title
    });

    category.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Note."});
        } else {
            res.send(data);
        }
    });
};
