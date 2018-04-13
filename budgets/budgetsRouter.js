const express = require('express');
const router = express.Router();

const Budget = require('./Budget.js');

router.route('/')
  .post(async (req, res) => {
    try {
      const budget = new Budget(req.body);
      await budget.save();
      res.status(200).json(budget);
    } catch (error) {
      res.status(500).json({ error: "The server has failed you" });
    }
  })

module.exports = router;
