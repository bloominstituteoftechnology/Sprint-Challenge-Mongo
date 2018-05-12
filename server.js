import express from 'express'; // remember to install your npm packages
import helmet from 'helmet';
import mongoose from 'mongoose';

import { BudgetModel } from './models/budget';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('connected'))
  .catch(err => console.error(err));

const server = express();

// add your server code

server.use(helmet());
server.use(express.json());

server.post('/budgets', async (req, res) => {
  const { body } = req;
  // validate body

  const newBudget = await new BudgetModel(body);
  console.log(newBudget);
  await res.send('hey');
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
