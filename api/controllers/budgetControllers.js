// app.route('/budget').post(controller.newBudget);

// title: {
//   type: String,
//   required: true
// },
// budgetAmount: {
//   type: Number,
//   required: true
// }

const mongoose = require('mongoose');

const Budget = require('../models/budget');

const makeBudget = (req, res) => {
  const { title, budgetAmount } = req.body;
  const newBudget = new Budget({ title, budgetAmount });
  newBudget.save(newBudget, (err, budget) => {
    if (err) {
      res.status(500).json({ '!E': err });
      return;
    }
    res.json(('New budget': budget));
  });
};

module.exports = {
  makeBudget
};
