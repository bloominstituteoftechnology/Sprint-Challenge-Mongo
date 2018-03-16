const categoryModel = require('../models/categoryModel'); //mongoose instance

const getCategories = (req, res) => {
    categoryModel.find({})
        .populate()
        .exec((err, resp) => {
            res.status(200).send(resp)
        });
};

const insertCategory = (req, res) => {
    categoryModel.create(req.body)
        .then(rsp => res.status(200).send(rsp))
        .catch(err => {
            res.status(500).send({error: "Something went wrong saving the category", info: err});
        });
};

module.exports = {getCategories, insertCategory};