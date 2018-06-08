


const getMiddleware = (goose) => {
  return (req, res, next) => {
    if (req.params.id) req.getResult = goose.findById(req.params.id);
    else req.getResult = goose.find();
    next();
  }
}

module.exports = {
  getMiddleware: getMiddleware
};
