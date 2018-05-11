const router = require('express').Router();
const Category = require('../data/Category');

//set end points here
//Postman test ok! http://localhost:5000/api/category
router.get('/', (req, res) => {
    Category
    .find()
    .select('title')
    .then(categories => {
        res.status(200).json(categories);
    })
    .catch(err => {
        res.status(500).json({ errorMsg: 'Categories could not be found.'})
    })
})

//Postman test ok! 4 categories created successfully
router.post('/', (req, res) => {
    const { title } = req.body;
    const newCategory = { title };
    const category = new Category(newCategory);
    category.save().then(category => {
        res.status(201).json(category);
    })
    .catch(err => {
        res.status(500).json({ errorMsg: 'Sorry category could not be created.' });
    })
})

//module export
module.exports = router;