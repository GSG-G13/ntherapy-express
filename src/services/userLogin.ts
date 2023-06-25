import { User } from '../models';

const LoginByEmail = async (email: string) => {
  const user = await User.findOne({
    attributes: ['email', 'password', 'isActive'],
    where: { email },
  });

  return user;
};

export default LoginByEmail;
