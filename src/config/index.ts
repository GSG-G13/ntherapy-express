import dotenv from 'dotenv';

dotenv.config();

const {
  PORT = 8080, DB_URL, DATABASE_URL, DB_TEST_URL, NODE_ENV = 'development',
} = process.env;

interface ICONFIG {
  environemnt: string,
  PORT: number | string,
  DB_URL: {
    [key: string] : string | undefined

  },

}
const config: ICONFIG = {
  DB_URL: {
    developemnt: DB_URL,
    production: DATABASE_URL,
    test: DB_TEST_URL,
  },
  environemnt: NODE_ENV,
  PORT,
};

export default config;
