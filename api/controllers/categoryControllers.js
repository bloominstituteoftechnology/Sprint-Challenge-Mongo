const mongoose = require('mongoose');
const Category = require('../models/category');


const createCategory = (req, res) => {
    const { title } = req.body;
    const newCategory = new Category({ title });
    newCategory.save((err, createdCategory) => {
        if (err) {
            res.status(422).json({'Something is not working correctly': err});
            return;
        }
        res.json(createdCategory);
    });
};

const addCategory = (req, res) => {
    const title = req.body.title;
    const category = new Category({ title });
    category.save((err, cat) => {
        if(err) {
            res.status(422).json({'Something is not working correctly': err});
            return;
        }
        res.status(200).json(cat);
    })
};

module.exports = {
    createCategory,
    addCategory,
};