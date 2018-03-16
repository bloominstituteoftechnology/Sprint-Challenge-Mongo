const budgetModel = require('../models/budgetModel'); //mongoose instance

const getBudget = (req, res) => {
    budgetModel.find({})
        .populate()
        .exec((err, post) => {
            console.log('hit getBudget');
            res.status(200).send(post)
        });
};

const insertBudget = (req, res) => {
    const budget = new budgetModel(req.body);
    budget.save()
        .then(rsp => res.status(201).send(rsp))
        .catch(err => {
            res.status(500).send({error: "Something went wrong saving the budget", info: err});
        });
};

module.exports = {getBudget, insertBudget};