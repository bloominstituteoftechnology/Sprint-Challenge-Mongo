const express = require('express');

const Category = require('./categoryModel');

const router = express.Router();

router.post('/', (req, res) => {
    const catInfo = req.body;
    const category = new Category(catInfo);

    category.save()
    .then(newCat => {
        res.json(newCat);
    })
    .catch(err => {
        res.status(500).json({ err: 'there was an error posting category'})
    })
});

router.get('/', (req, res) => {
    Category.find({})
    .select('title')
    .then(cat => {
        console.log('retrieving categories');
        res.json(cat);
    })
    .catch(err => {
        res.status(500).json({ 'Error retrieving categories': err })
    })
})

module.exports = router;
