import { Sequelize } from 'sequelize';
import { PASS, NAME, DATABASE } from '../config';

const sequelize = new Sequelize(DATABASE, NAME, PASS, {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});

export default sequelize;
