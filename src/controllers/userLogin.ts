import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models';
import { userLoginSchema } from '../helpers/validation';
import { templateErrors } from '../helpers';

dotenv.config();

const userLoginController = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    await userLoginSchema.validate({ email, password });

    const user = await User.findOne({
      attributes: ['email', 'password'],
      where: { email },
    });

    if (!user) {
      throw templateErrors.NOT_FOUND('user not found');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw templateErrors.UNAUTHORIZED('The password is invalid');
    }
    const secretKey = process.env.SECRET_KEY || '';
    const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: '1h' });
    console.log(token);

    res.json({
      message: 'user logged in successfully',
    });
  } catch (err) {
    next(err);
  }
};

export default userLoginController;
