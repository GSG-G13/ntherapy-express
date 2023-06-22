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

export { TherapistWithUserOptional, Imeeting, AppointmentWithTherapistOptional };
