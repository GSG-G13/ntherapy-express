import { DataTypes, ModelDefined, Sequelize, Optional } from "sequelize";
const sequelize = new Sequelize("ntherapy", "mohannad", "151984", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

interface UserAttributes {
  id: number;
  fullName: string;
  email: string;
  password: string;
  phone_number: string;
  role: string;
  is_active: boolean;
}

type UserCreationAttributes = Optional<UserAttributes, "id">;
const Users: ModelDefined<UserAttributes, UserCreationAttributes> = sequelize.define("users", {
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
    defaultValue: "client",
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});
async () => await Users.sync();

export default Users;

