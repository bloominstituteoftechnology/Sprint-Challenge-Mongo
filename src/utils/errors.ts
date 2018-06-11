import { NextFunction, Request, Response } from 'express'

export const catchError = (fn?: any) =>
  (req?: Request, res?: Response, next?: NextFunction) =>
    fn(req, res, next).catch(next)

interface IError extends Error {
  status: number
}

export const handleError = (err: IError, req: Request, res: Response, next?: NextFunction) => {
  if (err && err.message.includes('E11000 duplicate key error')) {
    return res
      .status(422)
      .json({ message: `${err.message.split('\"')[1]} is a duplicate key`, err })
  }
  const errorDetails = {
    message: err.message,
    stack: err.stack || '',
    status: err.status
  }
  res.status(err.status || 500).json(errorDetails)
}
