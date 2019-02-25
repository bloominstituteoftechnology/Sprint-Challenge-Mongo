const router = require('express').Router();
const Category = require('./categoryModel');

router
    .route('/')
    .get((req, res) => {
        Category
            .find()
            .select('title')
            .then(category => {
                res.status(200).json(category)
            })
            .catch(error => {
                res.status(500).json({ error: error.message })
            })
    })
    .post((req, res) => {
        const { title } = req.body;
        const newCat = new Category({ title });
        newCat
            .save()
            .then(new_category => {
                res.status(201).json({ success: "New Category Added", new_category})
            })
            .catch(error => {
                res.status(500).json({ error: error.message })
            })
    })


module.exports = router;
