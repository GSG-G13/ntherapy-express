import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models';
import { userLoginSchema } from '../helpers/validation';

dotenv.config();

const userLoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    await userLoginSchema.validate({ email, password });

    const user = await User.findOne({
      attributes: ['email', 'password'],
      where: { email },
    });

    if (!user) {
      res.status(404).json({
        error: true,
        message: 'User not found',
      });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(401).json({
        error: true,
        message: 'Invalid password',
      });
      return;
    }
    const secretKey = process.env.SECRET_KEY || '';
    const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: '1h' });
    console.log(token);

    res.status(200).json({
      error: false,
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: 'Internal server error',
    });
  }
};

export default userLoginController;
