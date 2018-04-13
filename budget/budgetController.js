const router = require('express').Router();

const budM = require('./budgetModel.js');

router.route('/')
.post((req, res) => {
    const newBud = new budM(req.body);
    newBud
    .save()
    .then(newB => {
        res.status(201).json(newB)
    })
    .catch(error => {
        res.status(500).json({ error: 'The budget was not created.' })
    })

})

module.exports = router;