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

export default UsersAttributes;