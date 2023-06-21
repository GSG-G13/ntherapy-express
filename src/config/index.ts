import dotenv from 'dotenv';
import { Credentials } from 'google-auth-library/build/src/auth/credentials';

dotenv.config();

const {
  PORT = 8080, DB_URL, DATABASE_URL, DB_TEST_URL, NODE_ENV = 'development',
  CLIENT_SECRET, CLIENT_ID, REFRESH_TOKEN, ACCESS_TOKEN, SCOPE,
  TOKEN_TYPE, EXPIRY_DATE, REDIRECT_URIS, PROJECT_ID, AUTH_URI, TOKEN_URI,
  AUTH_PROVIDER_X509_CERT_URL, SECRET_KEY, TOKEN_TEST_THERAPIST, API_KEY
} = process.env;

interface ICONFIG {
  environment: string,
  PORT: number | string,
  DB_URL: {
    [key: string]: string | undefined
  },
  SECRET_KEY: string | undefined,
  CLIENT_SECRET: string | undefined,
  CLIENT_ID: string | undefined,
  REFRESH_TOKEN: Credentials | undefined | string,
  ACCESS_TOKEN: Credentials | undefined | string,
  SCOPE: string | undefined,
  TOKEN_TYPE: string | undefined | Credentials,
  EXPIRY_DATE: string | undefined | number,
  REDIRECT_URIS: string | undefined | string[],
  PROJECT_ID: string | undefined | number,
  AUTH_URI: string | undefined | string[],
  TOKEN_URI: string | undefined | string[],
  AUTH_PROVIDER_X509_CERT_URL: string | undefined | string[],
  TOKEN_TEST_THERAPIST: string | undefined,
  API_KEY:string | undefined,
}
const config: ICONFIG = {
  DB_URL: {
    development: DB_URL,
    production: DATABASE_URL,
    testing: DB_TEST_URL,
  },
  environment: NODE_ENV,
  PORT,
  CLIENT_SECRET,
  CLIENT_ID,
  REFRESH_TOKEN,
  ACCESS_TOKEN,
  SCOPE,
  TOKEN_TYPE,
  EXPIRY_DATE,
  REDIRECT_URIS,
  PROJECT_ID,
  AUTH_URI,
  TOKEN_URI,
  AUTH_PROVIDER_X509_CERT_URL,
  SECRET_KEY,
  TOKEN_TEST_THERAPIST,
  API_KEY,

};

export default config;
