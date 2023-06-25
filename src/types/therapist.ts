import { AppointmentsAttributes, TherapistAttributes, UsersAttributes } from './models';

interface TherapistWithUserOptional extends TherapistAttributes {
  user?: UsersAttributes,
}

interface AppointmentWithTherapistOptional extends AppointmentsAttributes {
  therapist?: TherapistWithUserOptional,
}

interface Imeeting {
  therapistEmail: string,
  userEmail: string,
  startDate: string,
  endDate: string,
}

interface Appointment {
  therapistId: number;
  datetime: Date;
}

interface TimeRange {
  from: string;
  to: string;
}

interface AddAppointment {
  start: string,
  end: string,
  timeRanges: TimeRange[],
  therapistId: number,
}

export {
  TherapistWithUserOptional, Imeeting, Appointment,
  TimeRange, AddAppointment, AppointmentWithTherapistOptional,
};
