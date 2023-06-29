import bcrypt from 'bcrypt';
import { User, Therapist } from '../models';
import { templateErrors } from '../helpers';

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
const registerUser = async ({
  fullName, email, password, role, phoneNumber,
}: any) => {
  const userExist = await User.findOne({ where: { email } });
  if (userExist) {
    throw templateErrors.BAD_REQUEST('user already exist, please login instead');
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    fullName, email, password: hashedPassword, role, phoneNumber,
  });
  return user;
};

const registerTherapist = async ({
  fullName, email, password, cvLink, profileImg, major, hourlyRate, role, phoneNumber,
}: any) => {
  const user = await registerUser({
    fullName, email, password, role, phoneNumber,
  });
  await Therapist.create({
    cvLink, profileImg, major, hourlyRate, userId: user.id,
  });
  return user;
};

export { loginByEmail, registerTherapist, registerUser };
