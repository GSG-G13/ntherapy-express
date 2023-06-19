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

export { TherapistWithUserOptional, Imeeting };
