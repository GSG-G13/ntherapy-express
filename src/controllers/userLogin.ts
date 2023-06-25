import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';
import { userLoginSchema } from '../helpers/validation';
import { templateErrors } from '../helpers';
import { LoginByEmail } from '../services';
import config from '../config';

const userLoginController = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    await userLoginSchema.validate({ email, password });

    const user = await LoginByEmail(email);

    if (!user) {
      throw templateErrors.BAD_REQUEST('wrong email or password');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw templateErrors.UNAUTHORIZED('The password is invalid');
    }

    const token = jwt.sign({ email: user.email }, config.SECRET_KEY as Secret, { expiresIn: '1h' });

    res.json({
      message: 'user logged in successfully',
      token,
    });
  } catch (err) {
    next(err);
  }
};

export default userLoginController;
