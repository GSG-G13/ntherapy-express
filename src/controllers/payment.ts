import { NextFunction, Response } from 'express';
import getClientSecret from '../services/payment';
import { RequestWithUserRole } from '../types';

const findClientSecret = async (req: RequestWithUserRole, res: Response, next: NextFunction) => {
  try {
    const { SessionPrice } = req.body;
    const userId = req.user?.userId;
    const paymentIntent = await getClientSecret(SessionPrice, userId);
    return res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    next(error);
  }
};

export default findClientSecret;
