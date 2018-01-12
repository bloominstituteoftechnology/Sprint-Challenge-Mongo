const Category = require('../models/category');
const bodyParser = require('body-parser');

const categoryCreate = (req, res) => {
    // from Category Controller File
    const { title } = req.body;
    const category = new Category({ title });

    category.save()
        .then((newCategory) => {
            res.status(201).json(newCategory);
        })
        .catch((error) => {
            res.status(500).json({error: error.message});
        });
}

const categoryRetrieve = (req, res) => {
    Category.find({})
        .then((categories) => {
            const getTitle = categories.map(category => category.title);
            res.status(200).json(getTitle);
        })
        .catch((error) => {
            res.status(500).json({error: error.message});
        });
}

module.exports = {
    categoryCreate,
    categoryRetrieve
};