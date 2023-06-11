import { Sequelize } from 'sequelize';
import config from '../config/index';

const environemnt = config.environemnt || 'developemnt';
const DB_URL: string | undefined = config.DB_URL[environemnt];

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

export default sequelize;
