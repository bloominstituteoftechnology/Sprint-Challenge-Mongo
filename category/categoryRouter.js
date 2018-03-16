const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    const catInfo = req.body;
    const budget = new budget(catInfo);

    budget.save()
    .then(newCat => {
        res.send(newCat);
    })
    .catch(err => {
        res.status(500).json({ err: 'there was an error posting category'})
    })
});

module.exports = router;
