const router = require('express').Router();

const Category = require('./CategoryModel.js');

router
    .router('/')
    .get((req, res) => {
        Category.find()
            .then(categories => {
                if (categories.length === 0) {
                    res.status(404).json('There are no categories in the database.');
                    return;
                }
                else {
                    res.status(200).json(categories);
                }
            })
            .catch(error => res.status(500).json(error.message));
    })
    .post((req, res) => {
        const category = ({ title } = req.body);
        const newCategory = new Category(category);
        newCategory.save()
            .then(savedCategory => {
                res.status(201).json(savedCategory);
            })
            .catch(error => res.status(400).json(error.message))
    })

router
    .route('/:id')
    .get((req, res) => {
        const { id } = req.params;
        Category.findById(id)
            .then(foundCategory => {
                if (foundCategory === null) {
                    res.status(404).json('The requested category ID could not be found.');
                    return;
                }
                else {
                    res.status(200).json(foundCategory);
                }
            })
            .catch(error => res.status(404).json(error.message))
    })

module.exports = router; 