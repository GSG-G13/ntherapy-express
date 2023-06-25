import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';
import * as yup from 'yup';
import { userLoginSchema } from '../helpers/validation';
import { templateErrors } from '../helpers';
import { LoginByEmail } from '../services';
import config from '../config';

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    await userLoginSchema.validate({ email, password });

    const user = await LoginByEmail(email);

    if (!user) {
      throw templateErrors.BAD_REQUEST('Wrong email or password');
    }

    if (user && !user.isActive) {
      throw templateErrors.BAD_REQUEST('Your account is not activated yet. Please check your email for activation instructions.');
    }

    const payload: {
      userId: string,
      role: string,
    } = {
      role: user.role,
      userId: user.id.toString(),
    };

    if (user.role === 'therapist') {
      payload.userId = user.id.toString();
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw templateErrors.BAD_REQUEST('Wrong email or password');
    }

    const token = await new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      jwt.sign(payload, config.SECRET_KEY as Secret, { expiresIn: '1h' }, (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      });
    });
    res.json({
      message: 'User logged in successfully',
      token,
    });
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return next(templateErrors.BAD_REQUEST(err.message));
    }
    next(err);
  }
};

export default login;
