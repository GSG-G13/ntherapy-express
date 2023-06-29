import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import * as yup from 'yup';
import Mailgen from 'mailgen';
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
      const mailGenerator = new Mailgen({
        theme: 'salted',
        product: {
          name: 'Ntherapy',
          link: 'https://ntherapy.com/',
        },
      });
      const email = {
        body: {
          name: user.fullName,
          intro: 'Welcome to Ntherapy! We\'re very excited to have you on board. \n we will review your application and get back to you as soon as possible.',
          outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.',
        },
      };
      const emailBody = mailGenerator.generate(email);
      const emailText = mailGenerator.generatePlaintext(email);
      await mailer({
        to: user.email,
        subject: 'Account Activation',
        text: emailText,
        html: emailBody,
      });
      return res.json({
        message: 'Therapist registered successfully , please check your email for more details',
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
