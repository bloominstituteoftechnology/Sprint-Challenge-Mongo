// ☞ 2b0b84f8-18ae-49e0-b7c9-5d8274121162
const express = require('express')
// remember to install your npm packages

const helmet = require('helmet')
// const cors = require('cors')
const mongoose = require('mongoose')
// const Character = require('./characters/character')
// const Starship = require('./starships/starship')
mongoose.connect('mongodb://localhost/budgetTracker')

const db = require('./data/db.js')
const budgetRouter = require('./budget/budgetRouter.js')
const categoryRouter = require('./category/categoryRouter.js')
const expenseRouter = require('./expense/expenseRouter.js')

const server = express()

db
  .connectTo('budgetTracker')
  .then(() => console.log('\n... API Connected to budgetTracker Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to budgetTracker Database ***\n', err))

server.use(helmet())
server.use(express.json())

server.use('/api/budget', budgetRouter)
server.use('/api/category', categoryRouter)
server.use('/api/expense', expenseRouter)

server.get('/', (req, res) => res.send('API Running...'))

const port = process.env.PORT || 5000
server.listen(port, () => {
  console.log(`Server up and running on ${port}`)
})
