import { NextFunction, Request, Response } from 'express';
import getTherapistData from '../services';
import { templateErrors } from '../helpers';
import { TherapistAttributes, UsersAttributes } from '../types';

interface TypeData extends TherapistAttributes {
  user?: UsersAttributes
}
const therapistController = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    if (!parseInt(id, 10)) {
      throw templateErrors.BAD_REQUEST('error id should be number');
    }
    const data: TypeData | null = await getTherapistData(id);
    if (data) {
      if (!data?.user?.isActive) {
        throw templateErrors.NOT_FOUND('therapist isActive is false');
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
