/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

import { NextFunction, Request, Response } from 'express';
import { ErrorMessage } from './ErrorMessage';

export async function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof ErrorMessage) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  console.error('\n\n\n ❌ Error ❌ \n\n\n', 'Error Message: ', err.stack, '\n\n\n');

  return res.status(500).json({
    message: `Oops! Encontramos um problema e nossa equipe foi notificada.`,
  });
}
