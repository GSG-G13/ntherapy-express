import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import * as yup from 'yup';
import { userLoginSchema, userRegisterSchema } from '../helpers/validation';
import { templateErrors, generateToken } from '../helpers';
import { loginByEmail } from '../services';
import { TherapistAndUser, IPayload } from '../types';
import { registerTherapist, registerUser } from '../services/auth';
import mailer from '../services/nodemailer';

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

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req;
    await userRegisterSchema.validate(body);
    if (body.role === 'therapist') {
      const user = await registerTherapist(body);
      await mailer({
        from: 'ntherapypro@gmail.com',
        to: user.email,
        subject: 'Account Activation',
        text: `
         Hello ${user.fullName}, 
         Your Account Created Successfully 
         We will Review Your Account And Let You Know When You Are Activated
         Thank You
         Ntherapy Team
         `,
      });
      return res.json({
        message: 'User registered successfully',
      });
    }
    await registerUser(body);
    return res.json({
      message: 'User registered successfully',
    });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return next(templateErrors.BAD_REQUEST(error.message));
    }
    next(error);
  }
};

export { login, register };
