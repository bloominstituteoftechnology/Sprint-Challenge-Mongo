const express = require("express");

const Category = require('../models/Category');
const router = express.Router();


router.post('/',(req, res) => {
    const cat = req.body;
    console.log(cat);
    const category = new Category(cat);

    category
    .save()
    .then(val => {
        res.status(201).json(val);
    })
    .catch(err => {
        res.status(500).json({error: "Error creating new category"});
    });

});

router.get('/',(req, res) => {
    Category.find()
    .select('title')
    .then(categories => {
        res.status(200).json(categories);
    })
    .catch(err => {
        res.status(500).json({msg: "Could not get list of categories:", err})
    });
});


module.exports = router;