const router = require('express').Router();
const category = require('./categoryRouter.js');


router
.route('/')
.get((req,res) =>{
   category.find({})
    .then(category => {
        res.status(200).json(category);
    })
    .catch(err =>{
        res.status(500).json({ errorMessage: 'The categorys information could not be retrieved.' })
    });
})

.post((req, res) =>{
    const category = new category(req.body);
   category.save()
.then(addedCategory =>{

        res.status(201).json(addedCategory);
    })
    .catch(err =>res.status(500).json(err));
});
module.exports = router;