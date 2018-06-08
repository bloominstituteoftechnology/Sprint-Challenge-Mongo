const express = require('express');

const Budget = require('./Budget.model.js');

const myFactory = require('../myTools/routerFactory');

const router = express.Router();

router.route('/').get(noAllowed);

router
  .route('/:id')
  .get(noAllowed) // TODO: make this Router aggregate the info.
  .put(noAllowed);

myFactory.routerFactory(router, Budget)('expenses');

module.exports = router;

/**
 *  :CUSTOM MIDDLEWARES
 */
function noAllowed(req, res, next) {
  res.status(404).json({ message: 'Action no allowed' });
}
