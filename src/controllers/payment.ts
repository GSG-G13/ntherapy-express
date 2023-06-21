import { NextFunction, Request, Response } from 'express';
import getClientSecret from '../services/payment';

const findClientSecret = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const paymentIntent = await getClientSecret();
    return res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    next(error);
  }
};

export default findClientSecret;
