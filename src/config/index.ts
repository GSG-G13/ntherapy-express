import dotenv from 'dotenv';

dotenv.config();

const { PORT } = process.env;

// eslint-disable-next-line import/prefer-default-export
export { PORT };
