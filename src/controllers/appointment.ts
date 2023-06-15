import { NextFunction, Request, Response } from 'express';
import { Op } from 'sequelize';
import Appointment from '../models/appointment';
import sequelize from '../db/connection';


const getAppointments = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { date } = req.query;
  const { therpaistId } = req.params;
  try {
    const query = await Appointment.findAll({
      attributes: ['id', 'datetime', 'therapistId'],
      where: {
        [Op.and]: [
          { therapistId: +therpaistId },
          sequelize.where(
            sequelize.fn('date', sequelize.col('datetime')),
            date,
          ),
        ],
      },
    });

    if (!query.length) {
      throw new Error('no data found');
    }

    res.json({ data: query, message: 'OK!' });
  } catch (err) {
    next(err);
  }
};

export default getAppointments;
