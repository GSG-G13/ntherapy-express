import { NextFunction, Request, Response } from 'express';
import appointmentQuery from '../services/appointment';

const getAppointments = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { date } = req.query;
    const { therapistId } = req.params;
    const query = await appointmentQuery(therapistId, date);
    if (!query.length) { return res.json({ data: query, message: 'sorry but no appointments found' }); }
    return res.json({ data: query, message: 'appointment successful' });
  } catch (err) {
    return next(err);
  }
};

export default getAppointments;
