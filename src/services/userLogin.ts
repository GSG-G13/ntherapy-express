import { User } from '../models';

const LoginByEmail = async (email: string) => {
  const user = await User.findOne({
    attributes: ['id', 'email', 'password', 'isActive', 'role'],
    where: { email },
  });
  return user;
};

export default LoginByEmail;
