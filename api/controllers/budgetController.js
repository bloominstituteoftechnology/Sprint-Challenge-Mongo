const budgetModel = require('../models/budgetModel'); //mongoose instance

const getBudget = (req, res) => {
    budgetModel.find({})
        .populate()
        .exec((err, post) => {
            console.log('hit getBudget');
            res.status(200).send(post)
        });
};

module.exports = {getBudget};