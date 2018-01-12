const mongoose = require('mongoose');

const Category = require('../models/category');

const categoryCreate = (req, res) => {
    const { title } = req.body;
    const newCategory = new Category({ title });

    newCategory
        .save()
        .then((createdCategory) => {
            res.status(200).json(createdCategory);
        })
        .catch((err) => {
            res.status(422).json(err);
            return;
        });
};

const listCategories = (req, res) => {
    Category.find()
        .then((categories) => {
            res.status(200).json(categories);
        })
        .catch((err) => {
            res.status(422).json(err);
            return;
        });
};

module.exports = { categoryCreate, listCategories };