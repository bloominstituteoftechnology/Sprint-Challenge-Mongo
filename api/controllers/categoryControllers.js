const mongoose = require('mongoose');

const Category = require('../models/category');

const STATUS_USER_ERROR = 422;

const categoryCreate = (req, res) => {
    const { title } = req.body;
    const newCategory = new Category({ title });

    newCategory.save(newCategory, (err, createdCategory) => {
        if (err) {
            res.status(500).json(err);
            return;
        }
        res.json(createdCategory);
    });
};

const categoryList = (req, res) => {
    Category.find({})
        .select('title')
        .exec()
        .then((categories) => {
            if (categories.length === 0) {
                throw new Error();
            }
            res.json(categories);
        })
        .catch((err) => {
            res.status(STATUS_USER_ERROR).json(err);
        });
};

// const categoryListById = (req, res) => {
//     const { id } = req.params;

//     Category.findById({ id })
//         .exec()
//         .then((category) => {
//             if (!category) {
//                 throw new Error();
//             }
//             res.json(category);
//         })
//         .catch((err) => {
//             res.status(422).json(err);
//         });
// };

module.exports = {
    categoryCreate,
    categoryList
    // categoryListById
}