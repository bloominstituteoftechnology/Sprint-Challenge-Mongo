const express = require('express');
const Router = express.Router();

const Category = require('../models/CategoryModel');

Router.route('/')
  .get((req, res) => {
    Category.find({}, { title: 1, _id: 0 })
      .then(category => {
        res.status(200).json(category);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  })
  .post((req, res) => {
    Category.create(req.body)
      .then(category => {
        res.status(200).json(category);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = Router;
