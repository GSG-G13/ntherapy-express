import { Op } from 'sequelize';
import moment from 'moment';
import { Appointment, Therapist, User } from '../models';
import sequelize from '../db/connection';
import { templateErrors } from '../helpers';
import { Appointment as AppointmentType, TimeRange } from '../types';

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

const getAppointmentById = async (id: string) => {
  const appointment = await Appointment.findByPk(id);
  return appointment;
};

const updateIsAvailable = async (id: string, isAvailable: boolean) => {
  const afterUpdate = await Appointment.update(
    {
      isAvailable: !isAvailable,
    },
    {
      where: { id },
    },
  );
  return afterUpdate;
};

const generateAppointments = (
  start: string,
  end: string,
  timeRanges: TimeRange[],
  therapistId:number,
): AppointmentType[] => {
  const startDate = moment.utc(start, 'YYYY-MM-DD');
  const endDate = moment.utc(end, 'YYYY-MM-DD');
  const appointments: AppointmentType[] = [];

  const currentDate = startDate.clone().startOf('day').utc();

  while (currentDate.isSameOrBefore(endDate, 'day')) {
    const availableRanges = timeRanges.map((range) => {
      const { from, to } = range;
      const startTime = currentDate.clone().add(from, 'hours');
      const endTime = currentDate.clone().add(to, 'hours');

      return { startTime, endTime };
    });

    const hourRange = moment.duration(1, 'hour');

    availableRanges.forEach(({ startTime, endTime }) => {
      const currentTime = startTime.clone();

      while (currentTime.isBefore(endTime)) {
        appointments.push({
          therapistId,
          datetime: currentTime.clone().toDate(),
        });
        currentTime.add(hourRange);
      }
    });

    currentDate.add(1, 'day');
  }

  return appointments;
};

const addAppointment = async (
  therapistId:string,
  startDate:string,
  endDate:string,
  timeRanges:TimeRange[],
) => {
  const appointments = generateAppointments(
    startDate,
    endDate,
    timeRanges,
    parseInt(therapistId, 10),
  );

  const appointment = await Appointment.bulkCreate(appointments, {
    returning: true,
    updateOnDuplicate: ['id'],
  });
  return appointment;
};

export {
  getAppointmentsPerDateService, getAppointmentById, updateIsAvailable, addAppointment,
};
