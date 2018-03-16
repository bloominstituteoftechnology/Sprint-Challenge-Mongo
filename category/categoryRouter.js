const express = require('express');

const Category = require('./categoryModel');

const router = express.Router();

router.post('/', (req, res) => {
    const catInfo = req.body;
    const category = new Category(catInfo);

    category.save()
    .then(newCat => {
        res.send(newCat);
    })
    .catch(err => {
        res.status(500).json({ err: 'there was an error posting category'})
    })
});

router.get('/', (req, res) => {
    Category.find({})
    .then(cat => {
        console.log('retrieving categories');
        res.status(200).json(cat);
    })
    .catch(err => {
        res.status(500).json({ error: 'Error retrieving categories' })
    })
})

module.exports = router;
