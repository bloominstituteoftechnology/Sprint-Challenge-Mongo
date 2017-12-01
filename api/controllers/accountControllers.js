const mongoose = require('mongoose');

const Account = require('../models/account');

const createAccount = (req, res) => {
  const { title, amount } = req.body;
  const newAccount = new Account({ title, amount });
  newAccount.save((err, account) => {
    if (err) {
      res.status(422).json(err);
    }
    res.json(account);
  });
};

module.exports = {
  createAccount,
};
