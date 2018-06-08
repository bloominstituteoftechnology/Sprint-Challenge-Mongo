const router = require('express').Router();
const Category = require('./category.js');

router
.route('/')
.get((req, res) => {
    Category.find()
    .then(category => {
        res.status(200).json(category);
    })
    .catch(err => res.status(500).json({ error: 'The category information could not be retrieved.' }));
})
.post((req, res) => {
    const { title } = req.body;
    const newCategory = new Category({ title });
newCategory
    .save()
    .then(savedCategory => {
        res.json(savedCategory);
    })
})



module.exports = router;