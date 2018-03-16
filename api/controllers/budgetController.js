const budgetModel = require('../models/budgetModel'); //mongoose instance

const getBudget = (req, res) => {
    budgetModel.find({})
        .populate()
        .exec((err, post) => {
            console.log('hit getBudget');
            res.status(200).send(post)
        });
};

const createPost = (req, res) => {
    const post = new budgetModel(req.body);
    post.save()
        .then(pst => res.status(201).send(pst))
        .catch(err => {
            res.status(500).send({error: "Something went wrong saving the post", info: err});
        });
};

const getPostById = (req, res) => {
    budgetModel.findById(req.params.id)
        .populate({
            path: 'author',
        })
        .populate({
            path: 'comments.author',
        })
        .exec((err, post) => {
            res.status(200).send(post)
        });
};

const updatePostById = (req, res) => {
    budgetModel.findByIdAndUpdate(req.params.id, { "$push": { "comments": req.body } }, { new: true })
        .populate('author')
        .exec((err, post) => {
            res.status(200).send(post)
        });
};

module.exports = {getBudget};