const express = require("express");
const Category = require('./Category.js');
const router = express.Router();
const mongoose = require("mongoose");

router.route('/').get(async (req, res) => {
    try{
        const categories = await Category.find({})
        const mappedCategories = categories.map(title => title.title);
        res.status(200).json({mappedCategories})
    } catch(error){
        res.status(500).json({error: getError});
    }
})


router.route('/').post(async (req, res) => {
    try {
        let category = new Category({
            title: req.body.title
        })
        category.save(function (err, post) {
            if(err) {return next(err)}
            res.status(201).json(category)
        })
    } catch (error){
        res.status(500).json({error: error});
    }
})

module.exports = router;