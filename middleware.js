


const getMiddleware = (goose) => {
  return (req, res, next) => {
    req.getResult = goose.find();
    next();
  }
}

module.exports = {
  getMiddleware: getMiddleware
};
