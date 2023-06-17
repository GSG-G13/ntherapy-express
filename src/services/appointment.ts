import { Op } from 'sequelize';
import { Appointment } from '../models';
import sequelize from '../db/connection';

const getAppointmentsPerDateService = async (therapistId: string, date = 'today') => {
  const query = await Appointment.findAll({
    attributes: ['id', 'datetime', 'therapistId', 'isBooked', 'isAvailable'],
    where: {
      [Op.and]: [
        { therapistId },
        sequelize.where(
          sequelize.fn('date', sequelize.col('datetime')),
          date,
        ),
      ],
    },
  });
  return query;
};

export default getAppointmentsPerDateService;
