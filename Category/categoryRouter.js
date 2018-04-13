const express = require("express");
const mongoose = require("mongoose");
const Categories = require("./categoryModel.js");
const router = express.Router();

router.route("/")
    .post((req, res) => {
        const category = new Categories(req.body);

        category
            .save()
            .then(updatedCategory => {
                res.status(201).json(updatedCategory);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    });

module.exports = router;
