import { verify, Secret } from 'jsonwebtoken';
import config from '../config';

const verifyToken = (token: string) => new Promise((resolve, reject) => {
  verify(token, config.SECRET_KEY as Secret, (error: Error | null, decoded) => {
    if (error) {
      reject(error);
    }
    resolve(decoded);
  });
});

export default verifyToken;
