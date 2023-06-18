import { NextFunction, Request, Response } from 'express';

import { ValidationError } from 'yup';
import { getAppointmentsPerDateService } from '../services';
import { templateErrors, getAppointmentSchema } from '../helpers';

const getAppointments = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const date = req.query.date as string;
    const { therapistId } = req.params;
    await getAppointmentSchema.validate({ date, therapistId });
    const data = await getAppointmentsPerDateService(therapistId, date);
    if (!data.length) {
      return res.json({
        data,
        message: 'sorry but no appointments found',
      });
    }
    return res.json({
      data,
      message: 'appointment successful',
    });
  } catch (err:unknown) {
    if (err instanceof ValidationError) {
      return next(templateErrors.BAD_REQUEST('Validation Error'));
    }
    return next(err);
  }
};

export default getAppointments;
