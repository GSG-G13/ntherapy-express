import { Appointment, Therapist, User } from '../models';

const BookedAppointment = async (appointmentId: number) => {
  const appointment = await Appointment.findOne({
    where: {
      id: appointmentId,
      isAvailable: true,
      isBooked: false,
    },
    include: [
      {
        model: Therapist,
        include: [
          {
            model: User,
            attributes: ['email'],
          },
        ],
      },
    ],
  });

  return appointment;
};

export default BookedAppointment;
