interface IUser {
  fullName: string;
  email: string;
  password: string;
  role: string;
  phoneNumber?: string;
}

// eslint-disable-next-line import/prefer-default-export
export { IUser };
