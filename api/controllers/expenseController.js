const expenseModel = require('../models/expenseModel'); //mongoose instance

const getExpenses = (req, res) => {
    expenseModel.find({})
        .populate()
        .exec((err, resp) => {
            res.status(200).send(resp)
        });
};

const insertExpense = (req, res) => {
    expenseModel.create(req.body)
        .then(rsp => res.status(200).send(rsp))
        .catch(err => {
            res.status(500).send({error: "Something went wrong saving the expense", info: err});
        });
};

module.exports = {getExpenses, insertExpense};