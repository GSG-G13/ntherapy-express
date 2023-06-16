import { Op } from 'sequelize';
import { Appointment } from '../models';
import sequelize from '../db/connection';

const appointmentQuery = async (therapistId: string, date: any = 'today') => {
  const query = await Appointment.findAll({
    attributes: ['id', 'datetime', 'therapistId', 'isBooked', 'isAvailable'],
    where: {
      [Op.and]: [
        { therapistId: +therapistId },
        sequelize.where(
          sequelize.fn('date', sequelize.col('datetime')),
          date,
        ),
      ],
    },
  });
  return query;
};

export default appointmentQuery;
