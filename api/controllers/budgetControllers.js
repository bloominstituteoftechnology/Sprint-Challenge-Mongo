const budget = require('../models/budget.js')

exports.create = function(req, res) {
    if(!req.body.content) {
        res.status(400).send({message: "body can not be empty"});
    }
    const budget = new Budget({
        title: req.body.title
    });

    budget.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Note."});
        } else {
            res.send(data);
        }
    });
};

