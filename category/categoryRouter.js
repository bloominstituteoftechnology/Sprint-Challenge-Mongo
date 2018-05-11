const router = require('express').Router();

const Category = require('./category.js');

router.post('/', (req, res) => {
    const category = new Category(req.body);

    category.save()
    .then(category => {
        res.status(201).json(category)
    })
    .catch(err => {
        res.status(500).json({ error: 'Could Not Post Category!' })
    })
})

router.get('/', (req, res) => {
    Category
    .find()
    .select({ title: 1, _id: 0 })
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Could Not Retrieve The Categories!" })
    })
})

module.exports = router;