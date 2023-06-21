import { TherapistAttributes, UsersAttributes } from './models';

interface TherapistWithUserOptional extends TherapistAttributes {
  user?: UsersAttributes,
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

export {
  TherapistWithUserOptional, Imeeting, Appointment,
  TimeRange,
};
