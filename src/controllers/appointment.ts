import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'yup';
import { getAppointmentsPerDateService, getAppointmentById, updateIsAvailable } from '../services';
import { templateErrors, getAppointmentSchema } from '../helpers';
import { RequestWithUserRole } from '../types';

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
  } catch (err) {
    if (err instanceof ValidationError) {
      return next(templateErrors.BAD_REQUEST('Validation Error'));
    }
    return next(err);
  }
};

const updateAvailable = async (req: RequestWithUserRole, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const userData = req.user;

    if (!userData?.therapistId) {
      throw templateErrors.UNAUTHORIZED('Unauthorized');
    }

    const appointmentData = await getAppointmentById(id);
    if (appointmentData?.isBooked) {
      throw templateErrors.BAD_REQUEST('this appointment is booked');
    }

    if (appointmentData?.therapistId?.toString() === userData?.therapistId) {
      const data = await updateIsAvailable(id);
      return res.json({ data, message: 'update Available successful' });
    }
    throw templateErrors.UNAUTHORIZED('Unauthorized ');
  } catch (error) {
    if (error instanceof ValidationError) {
      return next(templateErrors.BAD_REQUEST('Validation Error'));
    }
    next(error);
  }
};

export { getAppointments, updateAvailable };
