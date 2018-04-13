const router = require('express').Router();

const Budget = require('./budget');

router.route('/').post();

module.exports = router;
