import {
  Model, InferAttributes, InferCreationAttributes, CreationOptional,
} from 'sequelize';

interface UsersAttributes extends Model
<InferAttributes<UsersAttributes>,
InferCreationAttributes<UsersAttributes>> {
  id: CreationOptional<number>,
  fullName: string,
  email: string,
  password: string,
  phoneNumber?: string | undefined,
  role: CreationOptional<string>,
  isActive: CreationOptional<boolean>,
  createdAt?: CreationOptional<Date>,
  updatedAt?: CreationOptional<Date>,
}

interface AdminAttributes extends Model
<InferAttributes<AdminAttributes>,
InferCreationAttributes<AdminAttributes>> {
  id: CreationOptional<number>,
  username: string,
  password: string,
  createdAt?: CreationOptional<Date>,
  updatedAt?: CreationOptional<Date>,
}

export { UsersAttributes, AdminAttributes };
