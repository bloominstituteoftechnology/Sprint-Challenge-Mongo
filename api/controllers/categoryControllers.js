const mongoose = require('mongoose');

const Category = mongoose.model('Category');

const STATUS_USER_ERROR= 422;

const createCategory = (req, res) => {
    const { title } = req.body;
    const newCategory = new Category({ title});
    newCategory.save()
    .then((newCategory)=> {
        res.json(newCategory);
    })
    .catch((err) => {
        res.status( STATUS_USER_ERROR);
        res.json(err);
    });
};

const returnCategories = (req, res) => {

    Category.find({})
        .then((categories) => {
            res.json(categories);
        }) 
        .catch((err) => {
            res.status(STATUS_USER_ERROR);
            res.json({ err });
        });
};

module.exports= { createCategory, returnCategories}