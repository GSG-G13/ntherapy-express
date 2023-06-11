import User from './user';
import Admin from './admin';
import Therapist from './therapist';

User.hasOne(Therapist);
Therapist.belongsTo(User);

export { User, Therapist, Admin };
