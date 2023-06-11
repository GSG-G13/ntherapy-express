import dotenv from 'dotenv';

dotenv.config();

const { PORT, DB_URL } = process.env;

// eslint-disable-next-line import/prefer-default-export
export {
  PORT, DB_URL,
};
