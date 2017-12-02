const mongoose = require('mongoose');
const Budget = require('../models/budget');
const statusCodes = require('../../common/statusCodes.js');
const { log, catchLog } = require('../../common/console.js');

const createBudget = (req, res) => {
  const { title, budgetAmount } = req.body;
  const newBudget = new Budget({ title, budgetAmount });
  newBudget.save()
  .then((savedBudget) => {
    res.status(statusCodes.created).json(savedBudget);
  })
  .catch((err) => {
    res.status(statusCodes.userError).json({ error: err.message });
  });
};

module.exports = { createBudget };
