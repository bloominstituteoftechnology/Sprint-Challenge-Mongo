const Router = require('express').Router()
const Categorydb = require('./category');

Router.post('/',(req,res) => {
    const obj = req.body;
    Categorydb.create(obj,(err,newcategory) => {
        if (err) res.status(500).json(err);
        res.status(202).json(newcategory);
    })
})

module.exports = Router;