const mongoose = require('mongoose');

const Category = require('../models/category');

const createCategory = (req, res) => {
    const { title } = req.body;
    const newCategory = new Category({ title });
    newCategory.save((err, savedCategory) => {
        if(err) {
            res.status(500).json(err);
            return;
        }
        res.json(savedCategory);
    });
};

const listCategories = (req, res) => {
    Category.find({})
        .select('title')
        .exec()
        .then(categories => {
            if(categories.length === 0){
                res.status(500).json({errMessage: 'error!'});
                return;
            }
            res.json(categories);
        })
        .catch(err => res.status(422).json(err));
}

module.exports = {
    createCategory,
    listCategories,
}