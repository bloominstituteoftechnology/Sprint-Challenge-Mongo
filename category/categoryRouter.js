const router = require('express').Router();

const Category = require('./category');

router
    .route('/')
    .get((req, res) => {
       Category.find({})
       .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.status(500).json({error: 'Error fetching category'}))
    })

    .post((req, res) => {
        const { title } = req.body;
        const newCategory = new Category({ title });
        console.log(newCategory);
        newCategory
            .save()
            .then(savedCategory => {
                res.status(201).json(savedCategory);
            })
            .catch(err => {
                res.status(422).json({ error: 'Error saving category'});
            });
    });

    module.exports = router;