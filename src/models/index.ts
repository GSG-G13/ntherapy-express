import User from './user';
import Therapist from './therapist';

User.hasOne(Therapist);
Therapist.belongsTo(User);

export { User, Therapist };
