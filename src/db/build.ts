import sequelize from './connection';
import {
  Users, Therapists, Sessions, Appointments, Admins,
} from './fakeData';
import {
  User, Therapist, Admin, Appointment, Session,
} from '../models';

const buildDB = async () => {
  await sequelize.sync({ force: true });
  await Admin.bulkCreate(Admins);
  await User.bulkCreate(Users);
  await Therapist.bulkCreate(Therapists);
  await Appointment.bulkCreate(Appointments);
  await Session.bulkCreate(Sessions);
};

buildDB();

export default buildDB;
