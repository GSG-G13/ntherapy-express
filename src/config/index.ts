import dotenv from 'dotenv';

dotenv.config();

const { PORT } = process.env;
const NAME = 'mohannad';
const PASS = '151984';
const DATABASE = 'ntherapy';

// eslint-disable-next-line import/prefer-default-export
export {
  PORT, DATABASE, NAME, PASS,
};
