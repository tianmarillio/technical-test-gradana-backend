import { NextFunction, Request, Response } from 'express'
import { GeneralError } from './error_definition'
import { HttpError } from './error_definition.interface'

export function errorHandler(
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  switch (err.name) {
    case GeneralError.validationError().name:
      return res
        .status(400)
        .json(serializeError(GeneralError.validationError(err?.errors)))
    case GeneralError.badRequest().name:
      return res.status(400).json(serializeError(err))
    case GeneralError.unauthorized().name:
      return res.status(401).json(serializeError(err))
    case GeneralError.notFound().name:
      return res.status(404).json(serializeError(err))
    default:
      return res
        .status(500)
        .json(serializeError(err ?? GeneralError.internalServerError()))
  }
}

function serializeError(err: Error) {
  return {
    isError: true,
    error: err,
  }
}
