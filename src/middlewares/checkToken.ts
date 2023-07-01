import { Response, NextFunction } from 'express';
import { templateErrors } from '../helpers';
import { verifyToken } from '../helpers/jwt';
import { Decode, RequestWithUserRole } from '../types';

const checkToken = async (
  req: RequestWithUserRole,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { token } = req;
    if (token) {
      const decoded = await verifyToken(token) as Decode;
      req.user = decoded;
      next();
    } else {
      throw templateErrors.UNAUTHORIZED('Unauthorized');
    }
  } catch (error) {
    next(templateErrors.UNAUTHORIZED('Unauthorized'));
  }
};

export default checkToken;
