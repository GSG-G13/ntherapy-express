import { Response, NextFunction } from 'express';
import * as yup from 'yup';
import bcrypt from 'bcrypt';
import { RequestWithUserRole } from '../types';
import { adminLoginSchema } from '../helpers/validation';
import { getAdmin } from '../services';
import { templateErrors, generateToken } from '../helpers';

const adminLogin = async (req: RequestWithUserRole, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  try {
    await adminLoginSchema.validate({ username, password });
    const admin = await getAdmin(username);

    if (!admin) {
      throw templateErrors.BAD_REQUEST(' wrong username or password');
    }
    const passwordMatch = await bcrypt.compare(password, admin?.password);

    if (!passwordMatch) {
      throw templateErrors.BAD_REQUEST('username or password');
    }

    const payload = {
      role: 'admin',
      adminId: admin.id,
    };

    const token = await generateToken(payload);
    res.json({
      message: 'Login Successful',
      data: { access_token: token },
    });
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return next(templateErrors.BAD_REQUEST(err.message));
    }
    next(err);
  }
};

export default adminLogin;
