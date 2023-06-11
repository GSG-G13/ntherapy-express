import User from './user';
import Admin from './admin';
import Therapist from './therapist';
import Appointment from './appointment';

User.hasOne(Therapist);
Therapist.belongsTo(User);

Therapist.hasMany(Appointment);
Appointment.belongsTo(Therapist);

export {
  User, Therapist, Appointment, Admin,
};
