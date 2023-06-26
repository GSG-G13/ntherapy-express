import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import * as yup from 'yup';
import { userLoginSchema } from '../helpers/validation';
import { templateErrors, generateToken } from '../helpers';
import { loginByEmail } from '../services';
import { TherapistAttributes, UsersAttributes } from '../types';

interface TherapistAndUser extends UsersAttributes {
  therapist?:TherapistAttributes
}

const login = async (req: Request, res: Response, next: NextFunction) => {
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

    const payload: IPayload
      userId: number,
      role: string,
      therapistId?: number
    } = {
      role: user.role,
      userId: user.id,
    };

    if (user.role === 'therapist') {
      payload.therapistId = user?.therapist?.id as number;
    }

    const token = await generateToken(payload);

    res.json({
      message: 'User logged in successfully',
      token,
      user,
    });
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return next(templateErrors.BAD_REQUEST(err.message));
    }
    next(err);
  }
};

export default login;
