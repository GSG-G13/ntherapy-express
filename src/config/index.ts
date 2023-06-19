import dotenv from 'dotenv';

dotenv.config();

const {
  PORT = 8080, DB_URL, DATABASE_URL, DB_TEST_URL, NODE_ENV = 'development', SECRET_KEY, MAILERUSER, MAILERPASS,
} = process.env;

interface ICONFIG {
  environment: string,
  PORT: number | string,
  DB_URL: {
    [key: string]: string | undefined
  },
  SECRET_KEY: string | undefined,
  MAILER: {
    [key: string]: string | undefined
  }
}
const config: ICONFIG = {
  DB_URL: {
    development: DB_URL,
    production: DATABASE_URL,
    testing: DB_TEST_URL,
  },
  environment: NODE_ENV,
  PORT,
  SECRET_KEY,
  MAILER: {
    user: MAILERUSER,
    pass: MAILERPASS,
  },
};

export default config;
