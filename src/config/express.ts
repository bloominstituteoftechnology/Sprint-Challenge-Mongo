import express from 'express'
import expressValidator from "express-validator";
import helmet from 'helmet'

import { handleError } from '../utils/errors'

interface App {
  use: (fn: any, cb?: any) => void
}

export = (app: App): void => {
  app.use(express.json())
  app.use(helmet())
  app.use(expressValidator())
  app.use('/api', require('./routes'))
  app.use(handleError)
}
