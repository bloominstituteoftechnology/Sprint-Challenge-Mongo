const express = require("express");

const Category = require('../models/Category');
const router = express.Router();


router.post('/category',(req, res) => {
    const cat = req.body;
    console.log("params");
    const category = new Category(cat);

    category
    .save()
    .then(value => {
        res.json(value);
    })
    .catch(err => {
        res.json({error: "Error creating new category"})
    });

});

router.get('/',(req, res) => {

});


module.exports = router;