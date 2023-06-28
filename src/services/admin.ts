import { Admin } from '../models';

const getAdmin = async (userName: string) => {
  const admin = await Admin.findOne({ where: { username: userName } });
  return admin;
};

export default getAdmin;
