import { Op } from 'sequelize';
import { Therapist, User } from '../models';
import { THERAPISTS_LIMIT } from '../config/constants';
import therapist from '../models/therapist';
import { Payload } from '../types';
import { templateErrors } from '../helpers';

const getTherapistById = async (id: string) => {
  const therapistData = await therapist.findByPk(id, {
    include: [{
      model: User,
      attributes: ['fullName', 'isActive', 'email'],

    },
    ],
  });
  return therapistData;
};

const getAllTherapist = async (name: string, page: number) => {
  const offset = (page - 1) * THERAPISTS_LIMIT;
  const therapists = await Therapist.findAll({
    include: [
      {
        model: User,
        attributes: ['fullName', 'isActive'],
        where: {
          isActive: true,
          fullName: {
            [Op.like]: `%${name}%`,
          },
        },
      },
    ],
    attributes: ['profileImg', 'major', 'hourlyRate', 'userId'],
    limit: THERAPISTS_LIMIT,
    offset,
  });

  return therapists;
};

const updateTherapist = async (data: Payload, therapistId:number, userID: number) => {
  const user = await User.findAll({ where: { id: userID }, attributes: ['isActive'] });
  if (!user?.[0].isActive) {
    throw templateErrors.UNAUTHORIZED('unauthorized');
  }
  let isUserUpdated;
  if ('fullName' in data || 'phoneNumber' in data) {
    isUserUpdated = await User.update(data, { where: { id: userID } });
  }
  const updateProfile = await Therapist.update(data, { where: { id: therapistId } });

  return { isTherapistUpdated: updateProfile[0], isUserUpdated };
};

export { getTherapistById, getAllTherapist, updateTherapist };
