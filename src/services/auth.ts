import { User, Therapist } from '../models';

const loginByEmail = async (email: string) => {
  const user = await User.findOne({
    attributes: ['id', 'email', 'password', 'isActive', 'role'],
    where: { email },
    include: {
      model: Therapist,
    },
  });
  return user;
};

export default loginByEmail;
