import { User } from '../models';

interface UserData {
  email: string;
}

const Login = async (userData: UserData) => {
  const { email } = userData;

  return User.findOne({
    attributes: ['id', 'email', 'password'],
    where: { email },
  });
};

export default Login;
