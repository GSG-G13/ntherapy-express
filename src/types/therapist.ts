import { TherapistAttributes, UsersAttributes } from './models';

interface TherapistWithUserOptional extends TherapistAttributes {
  user?: UsersAttributes,
}

// eslint-disable-next-line import/prefer-default-export
export { TherapistWithUserOptional };
