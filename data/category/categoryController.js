const router = require('express').Router();
const Category = require('./category.js');


router.route('/')
    .get((req, res) => {
        Category.find({}, '-_id -__v')
            .then(response => res.json(response))
            .catch(err => res.status(500).json({ error: err.message }));
    })
    .post((req, res) => {
        const newCategory = new Category({ title } = req.body);
        newCategory.save()
            .then(response => res.status(201).json(response))
            .catch(err => res.status(500).json({ error: err.message }));
    })

module.exports = router;