import { Sequelize } from 'sequelize';
import config from '../config';

const environment = config.environment || 'development';
const DB_URL: string | undefined = config.DB_URL[environment];

if (!DB_URL) {
  throw Error('no database found');
}

const sequelize = new Sequelize(DB_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: false,
  },
  logging: false,
});

export const THERAPISTS_LIMIT = 8;

export default sequelize;
