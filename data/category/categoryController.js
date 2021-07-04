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

router.route('/:id')
    .delete((req, res) => {
        const { id } = req.params;
        Category.findByIdAndDelete(id)
            .then(response => res.json(`The category with the id ${id} was deleted.`))
            .catch(err => res.status(500).res.json({ error: err.message}));
    })
    .put((req, res) => {
        const { id } = req.params;
        const updatedCategory = ({ title } = req.body);
        Category.findByIdAndUpdate(id, updatedCategory)
            .then(response => {
                Category.findById(id)
                .then(response => res.json(response))
                .catch(err => res.status(500).json({ error: err.message }));
            })
            .catch(err => res.status(500).json({ error: err.message }));
    })

module.exports = router;