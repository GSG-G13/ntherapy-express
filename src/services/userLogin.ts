import { User, Therapist } from '../models';
import { RolesForSelect } from '../types';

const LoginByEmail = async (email: string) => {
  const user = await User.findOne({
    attributes: ['id', 'email', 'password', 'isActive', 'role'],
    where: { email },
  });

  if (user && user.role === RolesForSelect.therapist) {
    const therapist = await Therapist.findOne({
      where: { userId: user.id },
      attributes: ['id'],
    });
    if (therapist) {
      console.log(therapist.id);
    }
  }

  return user;
};

export default LoginByEmail;
