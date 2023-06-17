import { NextFunction, Request, Response } from 'express';
import getAppointmentsPerDateService from '../services/appointment';
import { templateErrors } from '../helpers';

const getAppointments = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const date = req.query.date as string;
    const { therapistId } = req.params;

    if (Number.isNaN(+therapistId)) throw templateErrors.BAD_REQUEST('not found');
    const query = await getAppointmentsPerDateService(therapistId, date);
    if (!query.length) { return res.json({ data: query, message: 'sorry but no appointments found' }); }
    return res.json({ data: query, message: 'appointment successful' });
  } catch (err) {
    return next(err);
  }
};

export default getAppointments;
