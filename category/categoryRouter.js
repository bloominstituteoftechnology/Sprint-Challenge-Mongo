const router = require('express').Router();
const Category = require('./categoryModel');

router
    .post('/', function post(req, res) {
        const categoryData = req.body;
        const category = new Category(categoryData);

        category
            .save()
            .then(category => {
                res.status(201).json(category);
            })
            .catch(err => res.status(500).json({message:'Error occured saving category...'}))
})

module.exports = router;