import { NextFunction, Response } from 'express';
import bcrypt from 'bcrypt';
import * as yup from 'yup';
import { userLoginSchema } from '../helpers/validation';
import { templateErrors, generateToken } from '../helpers';
import { loginByEmail } from '../services';
import {
  TherapistAndUser, IPayload, RequestWithUserRole,
} from '../types';
import { Admin, Therapist, User } from '../models';

const login = async (req: RequestWithUserRole, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    await userLoginSchema.validate({ email, password });

    const user:TherapistAndUser | null = await loginByEmail(email);

    if (!user) {
      throw templateErrors.BAD_REQUEST('Wrong email or password');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw templateErrors.BAD_REQUEST('Wrong email or password');
    }

    if (user && !user.isActive) {
      throw templateErrors.BAD_REQUEST('Your account is not activated yet. Please check your email for activation instructions.');
    }

    const payload: IPayload = {
      role: user.role,
      userId: user.id,
    };

    if (user.role === 'therapist') {
      payload.therapistId = user?.therapist?.id as number;
    }

    const token = await generateToken(payload);

    res.json({
      message: 'User logged in successfully',
      data: { access_token: token },
    });
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return next(templateErrors.BAD_REQUEST(err.message));
    }
    next(err);
  }
};
const getAuth = async (
  req: RequestWithUserRole,
  res: Response,
  next: NextFunction,
) => {
  let data;
  if (req.user?.role === 'therapist') {
    const therapist = await Therapist.findOne({
      attributes: ['profileImg', 'id'],
      where: {
        id: req.user?.userId,
      },
      include: {
        model: User,
        attributes: ['fullName', 'role', 'id'],
      },
    });
    data = therapist;
  } else if (req.user?.role === 'user') {
    const user = await User.findOne({
      attributes: ['fullName', 'role', 'id'],
      where: {
        id: req.user?.userId,
      },
    });
    data = user;
  } else {
    const admin = await Admin.findOne({
      attributes: ['username', 'id'],
      where: {
        id: req.user?.userId,
      },
    });
    data = admin;
  }
  try {
    res.json({
      msg: 'success',
      data,
    });
  } catch (error) {
    next(error);
  }
};

export { login, getAuth };
