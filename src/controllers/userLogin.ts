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

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw templateErrors.BAD_REQUEST('wrong email or password');
    }

    const token = jwt.sign({ email: user.email }, config.SECRET_KEY as Secret, { expiresIn: '1h' });

    res.json({
      message: 'user logged in successfully',
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
