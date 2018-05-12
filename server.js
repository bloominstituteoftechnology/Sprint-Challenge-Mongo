import express from 'express'; // remember to install your npm packages
import helmet from 'helmet';

const server = express();

// add your server code
const app = express();

app.use(helmet());
app.use(express.json());

// async error catcher
const asyncMiddleware = fn => (error, req, res, next) => {
  const isPromise = fn instanceof Promise;
  if (!isPromise) return next(error);
};

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
