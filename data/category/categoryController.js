const router = require('express').Router();
const Category = require('./category.js');

router.route('/')
    .get((req, res) => {
        Category.find()
            .then(response => res.json(response))
            .catch(err => res.status(500).json({ error: err.message }));
    })
    .post((req, res) => {
        const newCategory = new Category({ title } = req.body);
        newCategory.save()
            .then(response => res.json(response))
            .catch(err => res.status(500).json({ error: err.message }));
    })

module.exports = router;