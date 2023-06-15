import { User } from '../models';
import therapist from '../models/therapist';

const getTherapistData = async (id: string) => {
  const therapistData = await therapist.findByPk(id, {
    include: [{
      model: User,
      attributes: ['fullName', 'isActive', 'email'],

    },
    ],
  });
  return therapistData;
};

export default getTherapistData;
