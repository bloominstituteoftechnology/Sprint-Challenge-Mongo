const Category = require('../models/category');

const categoryCreate = (req, res) => {
    const { title } = req.body;
    const newCategory = new Category({ title });
    newCategory.save(newCategory, (err, savedCategory) => {
        if(err) { res.status(500).json(err); return};
        res.json(savedCategory);
    });
};

const categoryGetAll = (req, res) => {
    Category.find({})
    .select('title')
    .exec()
    .then(categories => {
        if (categories.length === 0) throw new Error();
        res.json(categories);
    })
    .catch(err => res.status(422).json(err));
};

const categoryGetById = (req, res) => {
    const { id } = req.params;
    Category.findById(id)
    .populate('title')
    .exec()
    .then(singleCategory => {
        if(singleCategory === null) throw new Error();
        res.json(singleCategory);
    })
    .catch(err => res.status(422).json(err));
};

module.exports = {
    categoryCreate,
    categoryGetAll,
    categoryGetById
};