const express = require('express');
const router = express.Router();

const Categories = require('../categories/categories');
const Expenses = require('../expenses/expenses');
const Budget = require('../budgets/budgets');

router.post('/', function post(req, res) {
    const categoriesData = req.body;
    const categories = new Categories(categoriesData);
  
    categories
      .save()
      .then(categories => {
        res.status(201).json(categories);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  router.get('/', function get(req, res) {
    Categories
      .find()
      .select('title')
      .then(categoriess => {
        res.status(200).json(categoriess);
      });
  });
  module.exports = router;
