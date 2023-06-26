import { Response, NextFunction } from 'express';
import { RequestWithUserRole } from '../types';

const adminLogin = async (req: RequestWithUserRole, res: Response, next: NextFunction) => {
  try {
  } catch (e) {
    next(e);
  }
};

export default adminLogin;
