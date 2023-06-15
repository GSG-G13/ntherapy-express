import { TherapistAttributes, UsersAttributes } from './models';

interface TherapistWithOptional extends TherapistAttributes {
  user?: UsersAttributes,
}

// eslint-disable-next-line import/prefer-default-export
export { TherapistWithOptional };
