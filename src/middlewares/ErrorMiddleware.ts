import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../helpers';

const ErrorMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  const { status, message } = err;

  if (!status) {
    res.status(500).json({ message });
  } else {
    res.status(status).json({ message });
  }
};

export default ErrorMiddleware;
