import { Op } from 'sequelize';
import { Therapist, User } from '../models';
import { THERAPISTS_LIMIT } from '../db/connection';

const getAllTherapist = async (name: string, page: number, limit: number) => {
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
    limit,
    offset,
  });

  return therapists;
};

export default getAllTherapist;
