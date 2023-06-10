import { Sequelize } from 'sequelize';
import { PASS, NAME, DATABASE } from '../config';

const sequelize = new Sequelize({
  username: NAME,
  password: PASS,
  database: DATABASE,
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});

export default sequelize;
