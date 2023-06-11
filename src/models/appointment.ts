import { DataTypes } from 'sequelize';
import { AppointmentsAttributes } from '../types/index';
import sequelize from '../db/connection';

const Appointment = sequelize.define<AppointmentsAttributes>('Appointment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  datetime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  isBooked: {
    type: DataTypes.BOOLEAN,
  },

});

export default Appointment;
