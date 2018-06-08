const express = require("express");
const router = require("express").Router();
const Category = require("./Category");

router
  .route("/")
  .post((req, res) => {
    const categoryItem = req.body;
    const category = new Category(categoryItem);
    category
      .save()
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
