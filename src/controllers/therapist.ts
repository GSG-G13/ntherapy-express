import { NextFunction, Request, Response } from 'express';
import getTherapistData from '../services';
import { templateErrors } from '../helpers';
import { TherapistWithOptional } from '../types';

const therapistController = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    if (Number.isNaN(Number(id))) {
      throw templateErrors.BAD_REQUEST('id should be number');
    }
    const data: TherapistWithOptional | null = await getTherapistData(id);
    if (data) {
      if (!data?.user?.isActive) {
        throw templateErrors.NOT_FOUND('therapist not found');
      }
      res.json({ data, message: 'success therapist data' });
    } else {
      throw templateErrors.NOT_FOUND('Therapist not found');
    }
  } catch (error) {
    next(error);
  }
};

export default therapistController;
