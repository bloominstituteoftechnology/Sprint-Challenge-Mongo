const router = require('express').Router()

const catM = require('./categoryModel.js')

router.route('/')
.get((req, res) => {
    catM
    .find({})
    .select('title')
    .then(categs => {
        res.status(200).status(categs)
    })
    .catch(error => {
        res.status(500).status({error: 'The categories could not be found.'})
    })
})
.post((req, res) => {
    const newCat = new catM(req.body);
    newCat
    .save()
    .then(newC => {
        res.status(200).json(newC)
    })
    .catch(error => {
        res.status(500).json({error: 'Could not create a category.'})
    })

})

module.exports = router;