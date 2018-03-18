const express = require("express");

const Expense = require('../models/Expense');
const router = express.Router();

router.post('/',(req, res) => {
    Expense.create(req.body)
    .then(exp => res.status(201).json(exp))
    .catch(err => res.status(500).json({message: "could not create a budget", err}))
});

router.get('/', (req,res)=> {
    Expense.find()
    .populate('budget category')
    .then(exp => res.status(200).json(exp))
    .catch(err => res.status(500).json({message: "could not create a budget", err}));
});
module.exports = router;