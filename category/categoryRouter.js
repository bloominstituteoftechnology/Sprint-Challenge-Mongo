const express = require("express");
const router = require("express").Router();
const Category = require("./Category");

const Budget = require("../budget/Budget.js");

router
  .route("/")
  .post((req, res) => {
    const { title } = req.body;
    const catItem = { title };
    //const category = new Category(categoryItem);
    Category.create(catItem)
      .then(item => {
        res.status(201).json(item);
      })
      .catch(err => res.status(500).json({ error: err.message }));
  })
  .get((req, res) => {
    category
      .find({})
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).json({ error: err.message }));
  });

module.exports = router;
