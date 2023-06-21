import { Op } from 'sequelize';
import moment, { Duration } from 'moment';
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
  const startDate = moment(start, 'YYYY-MM-DD');
  const endDate = moment(end, 'YYYY-MM-DD');
  const appointments: AppointmentType[] = [];

  const availableTimeRanges: Duration[][] = timeRanges.map((range) => {
    const { from, to } = range;
    const startMoment = moment.utc(from, 'HH:mm');
    const endMoment = moment.utc(to, 'HH:mm');

    if (endMoment.isBefore(startMoment)) {
      return [
        moment.duration(startMoment.diff(moment().startOf('day'))),
        moment.duration(endMoment.diff(moment().startOf('day').add(1, 'day'))),
      ];
    }

    return [moment.duration(startMoment.diff(moment().startOf('day'))), moment.duration(endMoment.diff(moment().startOf('day')))];
  });

  const currentDate = startDate.clone().startOf('day');

  while (currentDate.isSameOrBefore(endDate, 'day')) {
    const availableRanges = availableTimeRanges.map((range) => {
      const startTime = currentDate.clone().startOf('day').add(range[0]);
      const endTime = currentDate.clone().startOf('day').add(range[1]);

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
    fields: ['therapistId', 'datetime'],
    ignoreDuplicates: true,
  });
  return appointment;
};
const range = [{ from: '08:00', to: '12:00' }, { from: '14:00', to: '18:00' }];
addAppointment('1', '2023-06-20', '2023-06-22', range)
  .then((res) => console.log(res))
  .catch((err:Error) => console.log(err));
export {
  getAppointmentsPerDateService, getAppointmentById, updateIsAvailable, addAppointment,
};
