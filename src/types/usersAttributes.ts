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
  phone_number?: string | undefined,
  role: CreationOptional<string>,
  is_active: CreationOptional<boolean>,
}
export default UsersAttributes;
