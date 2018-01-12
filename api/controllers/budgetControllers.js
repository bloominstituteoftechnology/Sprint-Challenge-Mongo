const mongoose = require('mongoose');

const Budget = mongoose.model('Budget');

const STATUS_USER_ERROR= 422;

const budgetCreate = (req,res) => {
    const { title, budgetAmount } = req.body;
    const newBudget = new Budget({ title, budgetAmount });
    newBudget.save()
    .then((newBudget)=> {
        res.json(newBudget);
    })
    .catch((err) => {
        res.status( STATUS_USER_ERROR);
        res.json(err);
    });
};

module.exports= { budgetCreate }