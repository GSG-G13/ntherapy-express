import { Op } from 'sequelize';
import { THERAPISTS_LIMIT } from '../config/constants';
import { Admin, Therapist, User } from '../models';

const getAdmin = async (userName: string) => {
  const admin = await Admin.findOne({ where: { username: userName } });
  return admin;
};

const getTherapists = async (name: string, page: number, active?: boolean) => {
  const offset = (page - 1) * THERAPISTS_LIMIT;

  const whereCondition = {
    isActive: active,
    fullName: {
      [Op.iLike]: `%${name}%`,
    },
  };

  if (active === undefined) {
    delete whereCondition.isActive;
  }

  const therapists = await Therapist.findAndCountAll({
    include: [
      {
        model: User,
        attributes: ['fullName', 'isActive', 'email', 'phoneNumber'],
        where: whereCondition,
      },
    ],
    attributes: ['profileImg', 'major', 'hourlyRate', 'userId', 'cvLink'],
    limit: THERAPISTS_LIMIT,
    offset,
    order: [[User, 'createdAt', 'DESC']],
  });

  return {
    therapists,
    totalPages: Math.ceil(therapists.count / THERAPISTS_LIMIT),
  };
};

export { getAdmin, getTherapists };
