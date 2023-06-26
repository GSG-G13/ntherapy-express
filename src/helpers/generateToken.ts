import jwt, { Secret } from 'jsonwebtoken';
import config from '../config';

const generateToken = (role: string, userId: string, expiresIn: string): Promise<string> => {
  const payload: {
    userId: string,
    role: string,
  } = {
    role,
    userId,
  };

  return new Promise((resolve, reject) => {
    jwt.sign(payload, config.SECRET_KEY as Secret, { expiresIn }, (error, token) => {
      if (error) {
        reject(error);
      }
      resolve(token as string);
    });
  });
};

export default generateToken;
