import { DataTypes } from 'sequelize';
import UsersAttributes from '../types/usersAttributes';
import sequelize from './connection';

const Users = sequelize.define<UsersAttributes>('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  phone_number: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'client',
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});
(async () => Users.sync())();

export default Users;
