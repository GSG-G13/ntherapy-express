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

const getAllTherapist = async (name: string, page: number, minPrice:string, maxPrice:string) => {
  const offset = (page - 1) * THERAPISTS_LIMIT;
  let priceFilter: any = {};

  if (minPrice !== '' && maxPrice !== '') {
    priceFilter = {
      hourlyRate: {
        [Op.between]: [minPrice, maxPrice],
      },
    };
  } else if (minPrice !== '') {
    priceFilter = {
      hourlyRate: {
        [Op.gte]: minPrice,
      },
    };
  } else if (maxPrice !== '') {
    priceFilter = {
      hourlyRate: {
        [Op.lte]: maxPrice,
      },
    };
  }
  const therapists = await Therapist.findAndCountAll({
    where: {
      ...priceFilter,
    },
    include: [
      {
        model: User,
        attributes: ['fullName', 'isActive'],
        where: {
          isActive: true,
          fullName: {
            [Op.iLike]: `%${name}%`,
          },

        },
      },
    ],

    attributes: ['profileImg', 'major', 'hourlyRate', 'userId', 'id'],
    limit: THERAPISTS_LIMIT,
    offset,
  });

  return { therapists, totalPages: Math.ceil(therapists.count / THERAPISTS_LIMIT) };
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
