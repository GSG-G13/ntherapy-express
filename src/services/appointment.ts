import { Op } from 'sequelize';
import { Appointment, Therapist, User } from '../models';
import sequelize from '../db/connection';
import { templateErrors } from '../helpers';

const getAppointmentsPerDateService = async (
  therapistId: string,
  date = 'today',
) => {
  const isTherapistFound = await Therapist.findByPk(therapistId, {
    include: [
      {
        model: User,
        attributes: ['fullName', 'isActive', 'email'],
        where: {
          isActive: true,
        },
      },
    ],
  });
  if (!isTherapistFound) {
    throw templateErrors.BAD_REQUEST('therapist not found');
  }
  const appointments = await Appointment.findAll({
    attributes: ['id', 'datetime', 'therapistId', 'isBooked', 'isAvailable'],
    where: {
      [Op.and]: [
        { therapistId },
        sequelize.where(sequelize.fn('date', sequelize.col('datetime')), date),
      ],
    },
  });
  return appointments;
};

export default getAppointmentsPerDateService;
