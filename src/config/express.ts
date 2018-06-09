import errorHandler from 'errorhandler'
import express from 'express'
import helmet from 'helmet'

export = (app: any): void => {
  app.use(express.json())
  app.use(helmet())
  app.use(errorHandler())
}
