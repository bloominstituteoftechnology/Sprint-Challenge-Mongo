const router = require('express').Router();

const Category = require('../data/Category');

router.get('/', (req, res) => {
    Category
    .find()
    .select('title')
    .then(categories => {
        res.status(200).json(categories);
    })
    .catch(err => {
        res.status(500).json({ error: 'The categories could not be retrieved at this time.'})
    })
})

router.post('/', (req, res) => {
    const { title } = req.body;
    const newCategory = { title };

    if(!title) {
        res.status(400).json({ error: 'Title is required.' });
    }

    const category = new Category(newCategory);
    category.save().then(category => {
        res.status(201).json(category);
    })
    .catch(err => {
        res.status(500).json({ error: 'There was an error creating the category' });
    })
})

module.exports = router;