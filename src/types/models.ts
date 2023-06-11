import {
  Model, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey,
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
interface TherapistAttributes extends Model
<InferAttributes<TherapistAttributes>,
InferCreationAttributes<TherapistAttributes>> {
  id:CreationOptional <number>,
  cvLink: string,
  profileImg?: string | undefined,
  major: string,
  bio?: string | undefined,
  hourlyRate: number,
  userId?: ForeignKey<UsersAttributes['id']>,
  createdAt?: CreationOptional<Date>,
  updatedAt?: CreationOptional<Date>,

}
export { UsersAttributes, TherapistAttributes };
