const User = require('../models/userModels');

const STATUS_USER_ERROR = 422;

/* Fill in each of the below controller methods */
const userCreate = (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  newUser.save()
    .then(newUser => res.json(newUser))
    .catch(err => res.status(422).json(err));
};

const userLogin = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username, password })
    .exec()
    .then(user => res.json(user))
    .catch(err => res.status(422).json({ error: err.message }));
};

module.exports = {
  userCreate,
  userLogin,
};