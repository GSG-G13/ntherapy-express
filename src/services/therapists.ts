import { Op } from 'sequelize';
import { Therapist, User } from '../models';

const getAllTherapist = async (name: string, page: number, limit: number) => {
  const offset = (page - 1) * limit; // for one page

  const therapist = await Therapist.findAll({
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
    attributes: ['profileImg', 'major', 'hourlyRate'],
    limit: 8,
    offset,
  });

  return therapist;
};

export default getAllTherapist;
