const express = require("express");

const mongoose = require("mongoose");
const Categories = require("./categoriesModel.js");

const router = express.Router();

// endpoint /api/categories

router.route("/").post((req, res) => {
    const category = new Categories(req.body);

    category
        .save()
        .then(savedCategory => {
            res.status(201).json(savedCategory);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;
