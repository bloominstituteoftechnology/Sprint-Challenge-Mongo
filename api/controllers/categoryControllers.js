const mongoose = require('mongoose');
const Category = require('../models/category')
const categoryCreate = (req, res) =>
{
    const {title} = req.body
    let category = new Category({title});
    category.save()
        .then((results) => {
            res.status(200).json(results)
            console.log('user ceate category')
        })
        .catch((err) => {
            res.status(500).json(err)
            console.log('problem create new category')
        })
}

const categoryList = (req, res) => {
    Category.find()
    .then((results) => {
        res.status(200).json(results);
        console.log('category listed')
    })
    .catch((err) => {
        res.status(500).json(err)
    })
}

module.exports = {categoryCreate, categoryList};