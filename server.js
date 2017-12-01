import bodyParser  from 'body-parser';
import express  from 'express';
import mongoose  from 'mongoose';
import routes from './api/routes/routes';

const server = express();

const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/budget', { useMongoClient: true });

server.use(bodyParser.json());

routes(server);

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
