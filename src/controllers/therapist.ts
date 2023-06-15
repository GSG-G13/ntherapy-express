import { NextFunction, Request, Response } from 'express';
import getTherapistData from '../services';
import { templateErrors } from '../helpers';

const therapistController = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const data = await getTherapistData(id);
    if (data) {
      res.json({ data, message: 'success therapist data' });
    } else {
      throw templateErrors.NOT_FOUND('Therapist not found');
    }
  } catch (error) {
    next(error);
  }
};

export default therapistController;
