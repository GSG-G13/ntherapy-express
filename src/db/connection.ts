import { Sequelize } from 'sequelize';
import { DB_URL } from '../config/index';

const sequelize = new Sequelize(DB_URL, {
  ssl: false,
  dialect: 'postgres',

});

export default sequelize;
