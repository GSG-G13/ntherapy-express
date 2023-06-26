import { User, Therapist } from '../models';
// import { RolesForSelect } from '../types';

const LoginByEmail = async (email: string) => {
  const user = await User.findOne({
    attributes: ['id', 'email', 'password', 'isActive', 'role'],
    where: { email },
    include: {
      model: Therapist,
    },
  });
  return user;
};

export default LoginByEmail;
