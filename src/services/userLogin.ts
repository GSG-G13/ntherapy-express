import { User } from '../models';

const LoginByEmail = async (email: string) => {
  const user = await User.findOne({
    attributes: ['email', 'password'],
    where: { email },
  });

  return user;
};

export default LoginByEmail;
