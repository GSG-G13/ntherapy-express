import dotenv from 'dotenv';

dotenv.config();

const {
  PORT, NAME,
  PASS, DATABASE,
} = process.env;

// eslint-disable-next-line import/prefer-default-export
export {
  PORT, DATABASE, NAME, PASS,
};
