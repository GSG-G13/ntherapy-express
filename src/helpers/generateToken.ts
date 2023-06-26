import jwt, { Secret } from 'jsonwebtoken';
import config from '../config';

interface IPayload {
  role: string;
  userId?: number;
  therapistId?: number;
  adminId?: number;
}
const generateToken = (payload: IPayload): Promise<string> => new Promise((resolve, reject) => {
  jwt.sign(payload, config.SECRET_KEY as Secret, (error, token) => {
    if (error) {
      reject(error);
    }
    resolve(token as string);
  });
});

export default generateToken;
