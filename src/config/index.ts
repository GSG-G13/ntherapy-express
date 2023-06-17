import dotenv from 'dotenv';

dotenv.config();

const {
  PORT = 8080, DB_URL, DATABASE_URL, DB_TEST_URL, NODE_ENV = 'development', MAILERUSER, MAILERPASS
} = process.env;

interface ICONFIG {
  environment: string,
  PORT: number | string,
  DB_URL: {
    [key: string] : string | undefined

  },
  mailer: {
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
  mailer: {
    user: MAILERUSER,
    pass: MAILERPASS,
  },
};

export default config;
